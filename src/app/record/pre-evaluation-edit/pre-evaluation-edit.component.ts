import {Component, Input, OnInit} from '@angular/core';
import {ToastService} from '../../toast/toast.service';
import {HttpService} from '../../core/http/http.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {WaitService} from '../../core/wait/wait.service';
import {SystemConstant} from '../../core/class/system-constant';
import {ToastType} from '../../toast/toast-type.enum';
import {ToastConfig} from '../../toast/toast-config';

@Component({
  selector: 'app-pre-evaluation-edit',
  templateUrl: './pre-evaluation-edit.component.html',
  styleUrls: ['./pre-evaluation-edit.component.scss']
})
export class PreEvaluationEditComponent implements OnInit {
  recordPreEvaluationEditTitle: string;
  @Input() numberSeq: any;
  @Input() sceneId = 0;
  @Input() questionnaireId = 0;
  @Input() companyId = 0;
  @Input() recordData = {
    recordPreEvaluation: {
      id: '',
      sceneId: 0,
      preEvaluationNo: '',
      verificationResult: ''
    },
    recordPreEvaluationDataList: [{
      id: '',
      preEvaluationId: '',
      preEvaluationProjectId: '',
      surveyResults: '',
      remarks: '',
      projectName: ''
    }],
    questionnaireId: 0
  };
  addFlag: boolean;
  action = '';

  constructor(
    private httpService: HttpService,
    private activeModal: NgbActiveModal,
    private toastService: ToastService,
    private waitService: WaitService
  ) {

  }

  ngOnInit() {
    if (this.recordData.recordPreEvaluation === null
      || this.recordData.recordPreEvaluation.id === null
      || this.recordData.recordPreEvaluation.id === '') {
      this.addFlag = true;
      this.recordPreEvaluationEditTitle = '新增--建设项目概况调查表';
      this.recordData.recordPreEvaluation = {
        id: '',
        sceneId: this.sceneId,
        preEvaluationNo: '',
        verificationResult: ''
      };
      this.httpService.get(SystemConstant.SYS_QUESTIONNAIRE + '/' + this.questionnaireId).subscribe({
        next: (data) => {
          this.recordData.recordPreEvaluation.preEvaluationNo = this.numberSeq + data.questionnaireNum ;
        },
        complete: () => {}
      });
      // 获取项目列表
      this.httpService.post(SystemConstant.DICTIONARY_LIST, {dictionaryTypeId: 1} ).subscribe({
        next: (data) => {
          this.recordData.recordPreEvaluationDataList = [];
          for (let i = 0; i < data.length; i++) {
            const recordPreEvaluationData = {
              'id': '',
              'preEvaluationId': '',
              'preEvaluationProjectId': data[i].id,
              'surveyResults': '',
              'remarks': '',
              'projectName': data[i].dictionaryName
            };
            this.recordData.recordPreEvaluationDataList.push(recordPreEvaluationData);
          }
        },
        complete: () => {
        }
      });
    } else {
      this.addFlag = false;
      this.recordPreEvaluationEditTitle = '修改--建设项目概况调查表';
    }
  }

  /**
   * 关闭对话框
   */
  close() {
    this.activeModal.dismiss('failed');
  }

  /**
   * 提交数据
   */
  submitData() {
    this.recordData.questionnaireId = this.questionnaireId;
    this.waitService.wait(true);
    let url = '';
    if (this.addFlag) {
      url = SystemConstant.PRE_EVALUATION_ADD;
    } else {
      url = SystemConstant.PRE_EVALUATION_EDIT;
    }
    // 保存调查表
    this.httpService.post(url, this.recordData).subscribe({
      next: (data) => {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', this.action + '操作成功！', 3000);
        this.toastService.toast(toastCfg);
        this.activeModal.close('success');
      },
      error: (err) => {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', this.action + '操作失败！' + '失败原因：' + err, 3000);
        this.toastService.toast(toastCfg);
      },
      complete: () => {
      }
    });
    this.waitService.wait(false);
  }

}

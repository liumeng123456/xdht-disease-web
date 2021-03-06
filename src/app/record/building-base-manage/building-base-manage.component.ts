import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../core/http/http.service';
import {ToastConfig} from '../../toast/toast-config';
import {SystemConstant} from '../../core/class/system-constant';
import {ToastService} from '../../toast/toast.service';
import {ToastType} from '../../toast/toast-type.enum';
import {WaitService} from '../../core/wait/wait.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-building-base-manage',
  templateUrl: './building-base-manage.component.html',
  styleUrls: ['./building-base-manage.component.scss']
})
export class BuildingBaseManageComponent implements OnInit {
  recordPostPersonelEditTitle: string;
  @Input() recordPostPersonnelRequest = {
    'recordPostPersonnel' : {
      'id': '',
      'postPersonnelNo' : '',
      'verificationResult': ''
    },
    'recordPostPersonnelDataList' : [{
      'id' : '',
      'companyOfficeId' : '',
      'postId' : '',
      'perShift' : '',
      'totalNumber' : '',
      'dayOfWeek' : '',
      'classOfDate' : '',
      'hourOfClass' : ''
    }]
  };
  addFlag: boolean;
  action = '';
  constructor(
    private httpService: HttpService,
    private activeModal: NgbActiveModal,
    private toastService: ToastService,
    private waitService: WaitService
  ) { }

  ngOnInit() {
    const postPersonnelId = this.recordPostPersonnelRequest.recordPostPersonnel.id;
    if (postPersonnelId === undefined || postPersonnelId === null || postPersonnelId === ''){
      this.addFlag = true;
      this.recordPostPersonelEditTitle = '新增--岗位定员及工作制度调查表';
    } else {
      this.addFlag = false;
      this.recordPostPersonelEditTitle = '修改--岗位定员及工作制度调查表';
    }
  }

  /**
   * 关闭对话框
   */
  close() {
    this.activeModal.dismiss('failed');
  }

  /**
   * 添加部门
   */
  addOffice() {
    const index = this.recordPostPersonnelRequest.recordPostPersonnelDataList.length;
    this.recordPostPersonnelRequest.recordPostPersonnelDataList[index] = { 'id' : '', 'companyOfficeId' : '', 'postId' : '', 'perShift' : '', 'totalNumber' : '', 'dayOfWeek' : '', 'classOfDate' : '', 'hourOfClass' : ''};
  }

  /**
   * 删除部门
   * @param index 序号
   */
  delOffice(index) {
    this.recordPostPersonnelRequest.recordPostPersonnelDataList.slice(index, index + 1);
  }

  /**
   * 提交
   */
  submitData() {
    this.httpService.post(SystemConstant.MENU_ADD, this.recordPostPersonnelRequest).subscribe({
      next: (data) => {
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', this.action + '用户成功！', 3000);
        this.toastService.toast(toastCfg);
        this.activeModal.close('success');
        const status = data.status;
        // if (status === '1') {
        // } else {
        //   const toastCfg = new ToastConfig(ToastType.ERROR, '', this.action + '用户失败！' + '失败原因：' + data.message, 3000);
        //   this.toastService.toast(toastCfg);
        //   this.activeModal.dismiss('failed');
        // }
      },
      error: (err) => {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', this.action + '用户失败！' + '失败原因：' + err, 3000);
        this.toastService.toast(toastCfg);
        this.activeModal.dismiss('failed');
      },
      complete: () => {
      }
    });
  }
}

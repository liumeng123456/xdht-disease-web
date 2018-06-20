import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent} from './record.component';
import { RecordRoutingModule } from './record-routing.module';
import { SceneEditComponent } from './scene-edit/scene-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SimpleDataTableModule } from '../simple-data-table/simple-data-table.module';
import { PostPersonelComponent } from './post-personel/post-personel.component';
import { SceneDetailComponent } from './scene-detail/scene-detail.component';
import { SceneManageComponent } from './scene-manage/scene-manage.component';
import { PreEvaluationManageComponent } from './pre-evaluation-manage/pre-evaluation-manage.component';
import { PreEvaluationEditComponent } from './pre-evaluation-edit/pre-evaluation-edit.component';
import { ControlEffectManageComponent } from './control-effect-manage/control-effect-manage.component';
import { ControlEffectEditComponent } from './control-effect-edit/control-effect-edit.component';
import { PresentSituationManageComponent } from './present-situation-manage/present-situation-manage.component';
import { PresentSituationEditComponent } from './present-situation-edit/present-situation-edit.component';
import { WorkLogManageComponent } from './work-log-manage/work-log-manage.component';
import { WorkLogEditComponent } from './work-log-edit/work-log-edit.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { EquipmentManageComponent } from './equipment-manage/equipment-manage.component';
import { EquipmentEditComponent } from './equipment-edit/equipment-edit.component';
import { EquipmentLayoutManageComponent } from './equipment-layout-manage/equipment-layout-manage.component';
import { EquipmentLayoutEditComponent } from './equipment-layout-edit/equipment-layout-edit.component';
import { HazardFactorsManageComponent } from './hazard-factors-manage/hazard-factors-manage.component';
import { HazardFactorsEditComponent } from './hazard-factors-edit/hazard-factors-edit.component';
import { AntiNoiseManageComponent } from './anti-noise-manage/anti-noise-manage.component';
import { AntiNoiseEditComponent } from './anti-noise-edit/anti-noise-edit.component';
import { TemperatureProtectionManageComponent } from './temperature-protection-manage/temperature-protection-manage.component';
import { TemperatureProtectionEditComponent } from './temperature-protection-edit/temperature-protection-edit.component';
import { OtherProtectiveManageComponent } from './other-protective-manage/other-protective-manage.component';
import { OtherProtectiveEditComponent } from './other-protective-edit/other-protective-edit.component';
import { IndividualProtectiveManageComponent } from './individual-protective-manage/individual-protective-manage.component';
import { IndividualProtectiveEditComponent } from './individual-protective-edit/individual-protective-edit.component';
import { EmergencyFacilitiesManageComponent } from './emergency-facilities-manage/emergency-facilities-manage.component';
import { EmergencyFacilitiesEditComponent } from './emergency-facilities-edit/emergency-facilities-edit.component';
import { InformingFacilitiesManageComponent } from './informing-facilities-manage/informing-facilities-manage.component';
import { InformingFacilitiesEditComponent } from './informing-facilities-edit/informing-facilities-edit.component';
import { HealthManagementManageComponent } from './health-management-manage/health-management-manage.component';
import { HealthManagementEditComponent } from './health-management-edit/health-management-edit.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleDataTableModule,
    RecordRoutingModule
  ],
  entryComponents: [
    SceneEditComponent,
    PostPersonelComponent,
    PreEvaluationEditComponent,
    ControlEffectEditComponent,
    PresentSituationEditComponent,
    WorkLogEditComponent,
    ProductEditComponent,
    EquipmentEditComponent,
    EquipmentLayoutEditComponent,
    HazardFactorsEditComponent,
    AntiNoiseEditComponent,
    TemperatureProtectionEditComponent,
    OtherProtectiveEditComponent,
    IndividualProtectiveEditComponent,
    EmergencyFacilitiesEditComponent,
    InformingFacilitiesEditComponent,
    HealthManagementEditComponent
  ],
  declarations: [
    PostPersonelComponent,
    RecordComponent,
    SceneEditComponent,
    SceneManageComponent,
    SceneDetailComponent,
    PreEvaluationManageComponent,
    PreEvaluationEditComponent,
    ControlEffectManageComponent,
    ControlEffectEditComponent,
    PresentSituationManageComponent,
    PresentSituationEditComponent,
    WorkLogManageComponent,
    WorkLogEditComponent,
    ProductManageComponent,
    ProductEditComponent,
    EquipmentManageComponent,
    EquipmentEditComponent,
    EquipmentLayoutManageComponent,
    EquipmentLayoutEditComponent,
    HazardFactorsManageComponent,
    HazardFactorsEditComponent,
    AntiNoiseManageComponent,
    AntiNoiseEditComponent,
    TemperatureProtectionManageComponent,
    TemperatureProtectionEditComponent,
    OtherProtectiveManageComponent,
    OtherProtectiveEditComponent,
    IndividualProtectiveManageComponent,
    IndividualProtectiveEditComponent,
    EmergencyFacilitiesManageComponent,
    EmergencyFacilitiesEditComponent,
    InformingFacilitiesManageComponent,
    InformingFacilitiesEditComponent,
    HealthManagementManageComponent,
    HealthManagementEditComponent
  ]
})
export class RecordModule { }

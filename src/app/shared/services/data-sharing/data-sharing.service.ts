import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  constructor() {}

  private Audit_trail = new BehaviorSubject<string|any>(undefined);
  audit_trail_data = this.Audit_trail.asObservable();

  updateAuditTrailData(data: string) {
    this.Audit_trail.next(data);
  }

  private Assigned_category = new BehaviorSubject<any>(undefined);
  assigned_category_data = this.Assigned_category.asObservable();

  updateAssignedCategoryData(data: any) {
    this.Assigned_category.next(data);
  }

  //pass domain table details
  private pass_domain_details_table = new BehaviorSubject<any>(undefined);
  pass_domain_details_table_data = this.pass_domain_details_table.asObservable();

  passDomainDetailsTable(data: any) {
    this.pass_domain_details_table.next(data);
  }

  private Emp_Details = new BehaviorSubject<any>(undefined);
  Emp_Details_data = this.Emp_Details.asObservable();

  Empdata(data: any) {
    this.Emp_Details.next(data);
  }
}

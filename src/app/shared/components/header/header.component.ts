import { Component } from '@angular/core';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchEmployeeComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}

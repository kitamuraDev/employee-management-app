import { Component } from '@angular/core';
import { SearchEmployeeComponent } from '../search-employee/search-employee.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchEmployeeComponent, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}

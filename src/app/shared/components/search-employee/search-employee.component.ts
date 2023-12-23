import { Component, ElementRef, OnInit, ViewChild, inject, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { Employees } from '../../types/employees';
import { Subject, debounceTime } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-employee',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search-employee.component.html',
})
export class SearchEmployeeComponent implements OnInit {
  @ViewChild('input') searchInputElm!: ElementRef;
  private readonly employeeService = inject(EmployeeService);

  readonly employees = signal<Employees[]>([]);
  private searchTerms = new Subject<string>();

  search(name: string): void {
    this.searchTerms.next(name);
  }

  resetSearchData(): void {
    this.searchInputElm.nativeElement.value = '';
    this.employees.set([]);
  }

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        debounceTime(300), // 300ms待つ
        distinctUntilChanged(), // 直前のデータと同じ場合は、後続処理を実行しない
        switchMap((searchTerm) => this.employeeService.searchEmployee(searchTerm)),
      )
      .subscribe((result) => this.employees.set(result));
  }
}

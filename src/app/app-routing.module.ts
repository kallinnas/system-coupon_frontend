import { AboutComponent } from './components/sections/about/about.component';
import { AdminCComponent } from './components/admin/admin-c/admin-c.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { CompaniesComponent } from './components/company/companies/companies.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { CouponsByPriceComponent } from './components/customer/coupons-by-price/coupons-by-price.component';
import { CompanyAccountComponent } from './components/company/company-account/company-account.component';
import { CouponCatComponent } from './components/customer/coupon-cat/coupon-cat.component';
import { CustomerCComponent } from './components/coupons/customer-c/customer-c.component';
import { CompanyCComponent } from './components/coupons/company-c/company-c.component';
import { CouponDetailsComponent } from './components/coupons/coupon-details/coupon-details.component';
import { GetByTitleComponent } from './components/customer/get-by-title/get-by-title.component';
import { HomeComponent } from './components/sections/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { Page404Component } from './components/sections/page404/page404.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { UpdateCompanyComponent } from './components/company/update-company/update-company.component';
import { FilterKComponent } from './components/customer/filter-k/filter-k.component';
import { AdminCompanyDetailsComponent } from './components/admin/admin-company-details/admin-company-details.component';
import { AdminUpdateCompanyComponent } from './components/admin/admin-update-company/admin-update-company.component';
import { AdUpdateCouponComponent } from './components/admin/ad-update-coupon/ad-update-coupon.component';
import { AdCustomersComponent } from './components/admin/ad-customers/ad-customers.component';
import { AdCustomerDetailsComponent } from './components/admin/ad-customer-details/ad-customer-details.component';
import { AdUpdateCustomerComponent } from './components/admin/ad-update-customer/ad-update-customer.component';
import { AccountCustComponent } from './components/customer/account-cust/account-cust.component';
import { CustUpdateComponent } from './components/customer/cust-update/cust-update.component';
import { CustCompanyDetailsComponent } from './components/customer/cust-company-details/cust-company-details.component';



const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "about", component: AboutComponent },
  
  { path: "filter-k", component: FilterKComponent },
  { path: "coupon-cat/:category", component: CouponCatComponent },
  { path: "coupons-by-price", component: CouponsByPriceComponent },
  { path: "get-by-title", component: GetByTitleComponent },
  
  
  { path: "customer-c", component: CustomerCComponent },
  { path: "company-c", component: CompanyCComponent},
  { path: "admin-c", component: AdminCComponent },
  
  
  
  { path: "coupon-details/:id", component: CouponDetailsComponent },
  { path: "company-details/:id", component: CompanyDetailsComponent },
  { path: "admin-company-details/:id", component: AdminCompanyDetailsComponent },
  { path: "ad-customers", component: AdCustomersComponent },  
  { path: "ad-customer-details/:id", component: AdCustomerDetailsComponent },  
  { path: "cust-company-details/:id", component: CustCompanyDetailsComponent },
  { path: "cust-update", component: CustUpdateComponent },

  { path: "companies", component: CompaniesComponent },
  { path: "add-coupon", component: AddCouponComponent },
  
  { path: "account-cust", component: AccountCustComponent },
  { path: "company-account", component: CompanyAccountComponent },
  
  { path: "ad-update-coupon", component: AdUpdateCouponComponent },
  { path: "ad-update-customer", component: AdUpdateCustomerComponent },
  { path: "admin-update-company", component: AdminUpdateCompanyComponent },
  { path: "update-coupon", component: UpdateCouponComponent },
  { path: "update-company", component: UpdateCompanyComponent },
  
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "settings", component: SettingsComponent },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

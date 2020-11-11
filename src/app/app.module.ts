import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { AboutComponent } from './components/sections/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyMenuComponent } from './components/company/company-menu/company-menu.component';
import { CustomerMenuComponent } from './components/customer/customer-menu/customer-menu.component';
import { CouponDetailsComponent } from './components/coupons/coupon-details/coupon-details.component';
import { CustomersComponent } from './components/customer/customers/customers.component';
import { CompaniesComponent } from './components/company/companies/companies.component';
import { DatePipe } from '@angular/common';
import { FilterKComponent } from './components/customer/filter-k/filter-k.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/sections/footer/footer.component';
import { HomeComponent } from './components/sections/home/home.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/sections/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { Page404Component } from './components/sections/page404/page404.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ThumbnailComponent } from './components/sections/thumbnail/thumbnail.component';
import { RootComponent } from './components/root/root.component';
import { CouponsByPriceComponent } from './components/customer/coupons-by-price/coupons-by-price.component';
import { CouponCatComponent } from './components/customer/coupon-cat/coupon-cat.component';
import { GetByTitleComponent } from './components/customer/get-by-title/get-by-title.component';
import { CompanyAccountComponent } from './components/company/company-account/company-account.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { UpdateCompanyComponent } from './components/company/update-company/update-company.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { CustomerCComponent } from './components/coupons/customer-c/customer-c.component';
import { CompanyCComponent } from './components/coupons/company-c/company-c.component';
import { AdminCComponent } from './components/admin/admin-c/admin-c.component';
import { AdminCompanyDetailsComponent } from './components/admin/admin-company-details/admin-company-details.component';
import { CustomerCompanyDetailsComponent } from './components/customer/customer-company-details/customer-company-details.component';
import { AdminUpdateCompanyComponent } from './components/admin/admin-update-company/admin-update-company.component';
import { AdUpdateCouponComponent } from './components/admin/ad-update-coupon/ad-update-coupon.component';
import { AccountCustComponent } from './components/customer/account-cust/account-cust.component';
import { AdCustomersComponent } from './components/admin/ad-customers/ad-customers.component';
import { AdCustomerDetailsComponent } from './components/admin/ad-customer-details/ad-customer-details.component';
import { AdUpdateCustomerComponent } from './components/admin/ad-update-customer/ad-update-customer.component';
import { CustUpdateComponent } from './components/customer/cust-update/cust-update.component';
import { CustCompanyDetailsComponent } from './components/customer/cust-company-details/cust-company-details.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, 
    FooterComponent, MenuComponent, HomeComponent,
    FilterKComponent, CustomersComponent, AboutComponent,
    RegistrationComponent, Page404Component, ThumbnailComponent, 
    CouponDetailsComponent, AddCouponComponent, LoginComponent, 
    SettingsComponent, AdminMenuComponent, 
    CustomerMenuComponent, CompanyMenuComponent, 
    RootComponent, CompaniesComponent, LogoutComponent, 
    CouponsByPriceComponent, CouponCatComponent, GetByTitleComponent, 
    CompanyAccountComponent, UpdateCouponComponent, UpdateCompanyComponent, 
    CompanyDetailsComponent, CustomerCComponent, CompanyCComponent, AdminCComponent, AdminCompanyDetailsComponent, CustomerCompanyDetailsComponent, AdminUpdateCompanyComponent, AdUpdateCouponComponent, AccountCustComponent, AdCustomersComponent, AdCustomerDetailsComponent, AdUpdateCustomerComponent, CustUpdateComponent, CustCompanyDetailsComponent],

  imports: [BrowserModule, AppRoutingModule, FormsModule, 
    HttpClientModule, ReactiveFormsModule],

  providers: [LayoutComponent, DatePipe, LoginComponent, 
    CouponsByPriceComponent,
    CouponDetailsComponent, RegistrationComponent, 
    FilterKComponent],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { MenuItem } from '@shared/layout/menu-item';

@Component({
    templateUrl: './sidebar-nav.component.html',
    selector: 'sidebar-nav',
    encapsulation: ViewEncapsulation.None
})
export class SideBarNavComponent extends AppComponentBase {

    menuItems: MenuItem[] = [
        new MenuItem(this.l("HomePage"), "", "home", "/app/home"),

        new MenuItem(this.l("Tenants"), "Pages.Tenants", "business", "/app/tenants"),
        new MenuItem(this.l("Users"), "Pages.Users", "people", "/app/users"),
        new MenuItem(this.l("Roles"), "Pages.Roles", "local_offer", "/app/roles"),
        new MenuItem(this.l("Events"), "Pages.Events", "event", "/app/events"),
        new MenuItem(this.l("About"), "", "info", "/app/about"),

        new MenuItem(this.l("CPULohn Xpress"), "", "menu", "", [
            new MenuItem("BruttoNetto", "", "", "", [
                new MenuItem("Home", "", "", "https://aspnetboilerplate.com/?ref=abptmpl"),
                new MenuItem("Templates", "", "", "https://aspnetboilerplate.com/Templates?ref=abptmpl"),
                new MenuItem("Samples", "", "", "https://aspnetboilerplate.com/Samples?ref=abptmpl"),
                new MenuItem("Documents", "", "", "https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl")
            ]),
            new MenuItem("Auswertung", "", "", "", [
                new MenuItem("Home", "", "", "https://aspnetzero.com?ref=abptmpl"),
                new MenuItem("Features", "", "", "https://aspnetzero.com/Features?ref=abptmpl"),
                new MenuItem("Pricing", "", "", "https://aspnetzero.com/Pricing?ref=abptmpl"),
                new MenuItem("Faq", "", "", "https://aspnetzero.com/Faq?ref=abptmpl"),
                new MenuItem("Documents", "", "", "https://aspnetzero.com/Documents?ref=abptmpl")
            ])
        ])
    ];

    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    showMenuItem(menuItem): boolean {
        if (menuItem.permissionName) {
            return this.permission.isGranted(menuItem.permissionName);
        }

        return true;
    }
}

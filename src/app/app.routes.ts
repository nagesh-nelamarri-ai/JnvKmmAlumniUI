import { Routes } from '@angular/router';
import { Homecontent } from './components/homecontent/homecontent';
import { Events } from './components/events/events';
import { Home } from './components/home/home';
import { Members } from './components/members/members';
import { Gallery } from './components/gallery/gallery';
import { Contactus } from './components/contactus/contactus';
import { Membership } from './components/membership/membership';
import { Contribution } from './components/contribution/contribution';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        children: [
           { path: 'homecontent', component: Homecontent },
            { path: 'members', component: Members },
            { path: 'events', component: Events },
            { path: 'gallery', component: Gallery },
            { path: 'contactus', component: Contactus },
            { path: 'membership', component: Membership },
            { path: 'contribute', component: Contribution },
            { path: '', redirectTo: 'homecontent', pathMatch: 'full' }
        ]

    }
];

import { LoginComponent } from './login.component';

// ################ ROUTES ##################
export const routes = [
    {
        children: [
            {
                path: '', pathMatch: 'full', component: LoginComponent
            },
        ],
    },
];

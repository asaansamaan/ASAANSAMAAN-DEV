import { ElectronicsComponent } from './electronics.component';

// ################ ROUTES ##################
export const routes = [
    {
        path: '',
        children: [
            {
                path: '', pathMatch: 'full', component: ElectronicsComponent
                },
        ],
    },
];

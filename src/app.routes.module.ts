import { ViewComponent } from "./app/component/view/view.component";
import { HomepageComponent } from "./app/component/homepage/homepage.component";
import { DetailComponent } from "./app/component/detail/detail.component";
import { EventComponent } from "./app/component/event/event.component";



export const AppRoutes = [
    {path:'', component: HomepageComponent},
    {path: 'detail', component: DetailComponent, children: [
    {path: 'event', component: EventComponent},
    {path: 'view', component: ViewComponent}
    

    ]}
        
    
];


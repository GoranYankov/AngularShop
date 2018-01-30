import {Routes} from '@angular/router';

//Components
import { AppComponent } from './app.component';
import {HomeComponent} from './component/home/home.component'
import { ProductComponent } from './component/product/product.component';
import { ArticleComponent } from './component/article/article.component';
import { ContactComponent } from './component/contact/contact.component';
import { FaqComponent } from './component/faq/faq.component';
import { PolesnoComponent } from './component/polesno/polesno.component';
import { LoginComponent } from './component/user/login/login.component';
import {AdminComponent} from './component/admin/admin.component';

//Gards
import {AdminGards} from './gards/admin.gards'
//Services

import {AuthServices} from './core/service/auth.service'
import { LastStepOrderComponent } from './component/last-step-order/last-step-order.component';
import { CartComponent } from './component/cart/cart.component';
import { SingelArticleComponent } from './component/article/singel-article/singel-article.component';
import { UsloviqComponent } from './component/usloviq/usloviq.component';
import { DelivaryComponent } from './component/delivary/delivary.component';
import { PlastaneComponent } from './component/plastane/plastane.component';
import { BmiComponent } from './component/polesno/bmi/bmi.component';
import { CaloriiComponent } from './component/polesno/calorii/calorii.component';
import { MsgComponent } from './component/admin/msg/msg.component';



export const routes = [
    { path: '',
    component: HomeComponent
     },
    {path:'home', component: HomeComponent},
    {path:'product/:url', component: ProductComponent},
    {path:'article', component: ArticleComponent},
    {path:'contact', component: ContactComponent},
    {path:'faq', component: FaqComponent},
    {path:'polesno', component: PolesnoComponent},
    {path:'polesno/bmi', component: BmiComponent},
    {path:'polesno/calorii', component: CaloriiComponent},
    {path:'login', component: LoginComponent},
    {path:'goran', component: AdminComponent, canActivate: [AdminGards] },
    {path:'goran/msg', component: MsgComponent, canActivate: [AdminGards] },
    {path: 'last-step-order', component: LastStepOrderComponent},
    {path: 'cart', component: CartComponent},
    {path: 'article/top/:url', component: SingelArticleComponent},
    {path: 'usloviq', component: UsloviqComponent},
    {path: 'delivary', component: DelivaryComponent},
    {path: 'plastane', component: PlastaneComponent},
    

    { path: '**', component: HomeComponent}

]

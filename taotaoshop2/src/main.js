import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
// 按需加载
import {
   Tabbar,
   TabbarItem,
   Icon,
   Form,
   Field,
   CellGroup,
   Button,
   Swipe,
   SwipeItem,
   Skeleton,
   SkeletonTitle,
   SkeletonImage,
   SkeletonAvatar,
   SkeletonParagraph,
   Tab,
   Tabs,
   Divider,
   Sidebar,
   SidebarItem,
   Search,
   BackTop,
   NavBar,
   TreeSelect,
   Image as VanImage,
   ActionBar,
   ActionBarIcon,
   ActionBarButton,
   ShareSheet,
   Cell,
   Popup,
   Stepper,
   Sticky,
   Lazyload,
   Card,
   RadioGroup,
   Radio,
   Checkbox,
   CheckboxGroup,
   SubmitBar,
   SwipeCell,
   TextEllipsis,
   List, PullRefresh,Dialog
} from 'vant'; // 按需加载引入vant组件库
import 'vant/lib/index.css'; // 引入vant组件库
import 'lib-flexible/flexible'; //移动端适配
import './assets/style/main.css'; //样式重置
import router from './router'; //引入路由
import '@/mock/index';

const app = createApp(App);

app
.use(Dialog)
   .use(PullRefresh)
   .use(List)
   .use(TextEllipsis)
   .use(SwipeCell)
   .use(SubmitBar)
   .use(CheckboxGroup)
   .use(Checkbox)
   .use(Radio)
   .use(RadioGroup)
   .use(Card)
   .use(Lazyload)
   .use(Sticky)
   .use(Stepper)
   .use(Cell)
   .use(Popup)
   .use(ShareSheet)
   .use(ActionBarIcon)
   .use(ActionBar)
   .use(ActionBarButton)
   .use(VanImage)
   .use(TreeSelect)
   .use(NavBar)
   .use(BackTop)
   .use(Search)
   .use(Sidebar)
   .use(SidebarItem)
   .use(Divider)
   .use(Tab)
   .use(Tabs)
   .use(Skeleton)
   .use(SkeletonTitle)
   .use(SkeletonImage)
   .use(SkeletonAvatar)
   .use(SkeletonParagraph)
   .use(Swipe)
   .use(SwipeItem)
   .use(Button)
   .use(Form)
   .use(Field)
   .use(CellGroup)
   .use(Icon)
   .use(Tabbar)
   .use(TabbarItem)
   .use(createPinia())
   .use(router)
   .mount('#app');

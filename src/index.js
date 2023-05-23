import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.scss";
import store from "./store.js"; // Import Redux store

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./layouts";

// auth
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ResetPassword from "./pages/auth/reset-password";
import LockScreen from "./pages/auth/lockscreen";

// //pages
import Dashboard from "./pages/dashboard";
import BotTool from "./pages/BotTool";

//Widgets
import WidgetsApps from "./pages/widgets-apps";
import WidgetsData from "./pages/widgets-data";
// //apps
import AppChat from "./pages/app-chat";
import AppTicket from "./pages/app-ticket";
import AppContact from "./pages/app-contact";
import AppContactDetail from "./pages/app-contact-detail";
// //Charts
import ChartC3 from "./pages/chart-c3";
import ChartChartjs from "./pages/chart-chartjs";
import ChartFlot from "./pages/chart-flot";
import ChartMorris from "./pages/chart-morris";
import ChartRadial from "./pages/chart-radial";
import ChartRickshaw from "./pages/chart-rickshaw";
import ChartSparkline from "./pages/chart-sparkline";
// new chart
// Charts
import Apexcharts from "./pages/charts/ApexCharts/Apexcharts";
import GoogleCharts from "./pages/charts/GoogleCharts/GoogleCharts";
import KnobChart from "./pages/charts/KnobChart/KnobChart";
import Chartsjs from "./pages/charts/Chartsjs/Chartsjs";
import Chartist from "./pages/charts/ChartistCharts/Chartist";

// //EXAMPLES
import CorporateAdd from "./pages/corporate-add";
import CorporatePages from "./pages/corporate-pages";
import EcommerceAdd from "./pages/ecommerce-add";
import EcommerceOrders from "./pages/ecommerce-orders";
import EcommerceProducts from "./pages/ecommerce-products";
import ExamplesAddAndUpdate from "./pages/examples-add-and-update";
import ExamplesDelete from "./pages/examples-delete";

// //form
import FormBasic from "./pages/form-basic";
import FormEditor from "./pages/form-editor";
import FormFileUpload from "./pages/form-file-upload";
import FormMasks from "./pages/form-masks";
import FormPicker from "./pages/form-picker";
import FormValidations from "./pages/form-validations";
import FormWizard from "./pages/form-wizard";
import MailCompose from "./pages/mail-compose";
import MailIndex from "./pages/mail-index";
import MailView from "./pages/mail-view";
import MapVector from "./pages/map-vector";

// //page
import PageBlank from "./pages/page-blank";
import PageFaqs from "./pages/page-faqs";
import PageGallery from "./pages/page-gallery";
import PageInvoice from "./pages/page-invoice";
import PagePricing from "./pages/page-pricing";
import PageProfile from "./pages/page-profile";
import PageTimeline from "./pages/page-timeline";
import TableBasic from "./pages/table-basic";
import DataTables from "./pages/table-data";

// ui element
import UiBootstrapElements from "./pages/ui-bootstrap-elements";
import UiAlertify from "./pages/ui-alertify";
import UiButtons from "./pages/ui-buttons";
import UiCardMaster from "./pages/ui-card-master";
import UiCards from "./pages/ui-cards";
import UiCarousel from "./pages/ui-carousel";
import UiDraggableCards from "./pages/ui-draggable-cards";
import UiGrid from "./pages/ui-grid";
import UiIcons from "./pages/ui-icons";
import UiJqueryElements from "./pages/ui-jquery-elements";
import UiModals from "./pages/ui-modals";
import UiNestable from "./pages/ui-nestable";
import UiNotification from "./pages/ui-notification";
import UiProgress from "./pages/ui-progress";
import UiRangeSlider from "./pages/ui-range-slider";
import UiSweetalerts from "./pages/ui-sweetalerts";
import UiTabs from "./pages/ui-tabs";
import UiTipPop from "./pages/ui-tip-pop";
import UiTreeview from "./pages/ui-treeview";
import UiTypography from "./pages/ui-typography";
import Page404 from "./pages/page-error/page-404";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path='/auth'
            render={() => <Redirect to='/auth/login' />}
          />
          <Route path={`/auth/login`} component={Login} />
          <Route path={`/auth/register`} component={Register} />
          <Route path={`/auth/forget-password`} component={ResetPassword} />
          <Route path={`/auth/lock-screen`} component={LockScreen} />
          <Layout name='backend'>
            <Route exact path='/' render={() => <Redirect to='/dashboard' />} />
            <Route path={`/dashboard`} component={Dashboard} />
            <Route path={`/bot-tool`} component={BotTool} />

            <Route path={`/app-chat`} component={AppChat} />
            <Route path={`/app-contact-detail`} component={AppContactDetail} />
            <Route path={`/app-contact`} component={AppContact} />
            <Route path={`/app-ticket`} component={AppTicket} />

            <Route path={`/chart-c3`} component={ChartC3} />
            <Route path={`/chart-chartjs`} component={ChartChartjs} />
            <Route path={`/chart-flot`} component={ChartFlot} />
            <Route path={`/chart-morris`} component={ChartMorris} />
            <Route path={`/chart-radial`} component={ChartRadial} />
            <Route path={`/chart-rickshaw`} component={ChartRickshaw} />
            <Route path={`/chart-sparkline`} component={ChartSparkline} />

            <Route path={`/chart-apex`} component={Apexcharts} />
            <Route path={`/chart-Google`} component={GoogleCharts} />
            <Route path={`/chart-Knob`} component={KnobChart} />
            <Route path={`/chart-js`} component={Chartsjs} />
            <Route path={`/chart-Chartist`} component={Chartist} />

            <Route path={`/corporate-add`} component={CorporateAdd} />
            <Route path={`/corporate-pages`} component={CorporatePages} />

            <Route path={`/ecommerce-add`} component={EcommerceAdd} />
            <Route path={`/ecommerce-orders`} component={EcommerceOrders} />
            <Route path={`/ecommerce-products`} component={EcommerceProducts} />

            <Route
              path={`/examples-add-and-update`}
              component={ExamplesAddAndUpdate}
            />
            <Route path={`/examples-delete`} component={ExamplesDelete} />
            <Route path={`/form-basic`} component={FormBasic} />
            <Route path={`/form-editor`} component={FormEditor} />
            <Route path={`/form-file-upload`} component={FormFileUpload} />
            <Route path={`/form-masks`} component={FormMasks} />
            <Route path={`/form-picker`} component={FormPicker} />
            <Route path={`/form-validations`} component={FormValidations} />
            <Route path={`/form-wizard`} component={FormWizard} />

            <Route path={`/mail-compose`} component={MailCompose} />
            <Route path={`/mail-index`} component={MailIndex} />
            <Route path={`/mail-view`} component={MailView} />
            <Route path={`/map-vector`} component={MapVector} />

            <Route path={`/page-blank`} component={PageBlank} />
            <Route path={`/page-faqs`} component={PageFaqs} />
            <Route path={`/page-gallery`} component={PageGallery} />
            <Route path={`/page-invoice`} component={PageInvoice} />
            <Route path={`/page-pricing`} component={PagePricing} />
            <Route path={`/page-profile`} component={PageProfile} />
            <Route path={`/page-timeline`} component={PageTimeline} />

            <Route path={`/table-basic`} component={TableBasic} />
            <Route path={`/table-data`} component={DataTables} />

            {/* form and ui element */}
            <Route
              path={`/ui-bootstrap-elements`}
              component={UiBootstrapElements}
            />
            <Route path={`/ui-alertify`} component={UiAlertify} />
            <Route path={`/ui-buttons`} component={UiButtons} />
            <Route path={`/ui-card-master`} component={UiCardMaster} />
            <Route path={`/ui-cards`} component={UiCards} />
            <Route path={`/ui-carousel`} component={UiCarousel} />
            <Route path={`/ui-draggable-cards`} component={UiDraggableCards} />
            <Route path={`/ui-grid`} component={UiGrid} />
            <Route path={`/ui-icons`} component={UiIcons} />
            <Route path={`/ui-jquery-elements`} component={UiJqueryElements} />
            <Route path={`/ui-modals`} component={UiModals} />
            <Route path={`/ui-nestable`} component={UiNestable} />
            <Route path={`/ui-notification`} component={UiNotification} />
            <Route path={`/ui-progress`} component={UiProgress} />
            <Route path={`/ui-range-slider`} component={UiRangeSlider} />
            <Route path={`/ui-sweetalerts`} component={UiSweetalerts} />
            <Route path={`/ui-tabs`} component={UiTabs} />
            <Route path={`/ui-tip-pop`} component={UiTipPop} />
            <Route path={`/ui-treeview`} component={UiTreeview} />
            <Route path={`/ui-typography`} component={UiTypography} />
            <Route path={`/widgets-apps`} component={WidgetsApps} />
            <Route path={`/widgets-data`} component={WidgetsData} />
          </Layout>
          <Route path='*' component={Page404} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

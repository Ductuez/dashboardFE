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
import BetRecord from "./pages/BetRecord";

//Widgets
import WidgetsApps from "./pages/widgets-apps";
import WidgetsData from "./pages/widgets-data";
// //apps
import AppTicket from "./pages/app-ticket";
import AppContact from "./pages/app-contact";
import AppContactDetail from "./pages/app-contact-detail";

// //EXAMPLES
import CorporatePages from "./pages/corporate-pages";
import EcommerceOrders from "./pages/ecommerce-orders";
import EcommerceProducts from "./pages/ecommerce-products";
import ExamplesAddAndUpdate from "./pages/examples-add-and-update";
import ExamplesDelete from "./pages/examples-delete";

// //form
import FormBasic from "./pages/form-basic";
import FormEditor from "./pages/form-editor";
import FormFileUpload from "./pages/form-file-upload";
import FormValidations from "./pages/form-validations";
import FormWizard from "./pages/form-wizard";
import MailCompose from "./pages/mail-compose";
import MailIndex from "./pages/mail-index";
import MailView from "./pages/mail-view";

// //page
import PageBlank from "./pages/page-blank";
import PageFaqs from "./pages/page-faqs";
import PageInvoice from "./pages/page-invoice";
import PagePricing from "./pages/page-pricing";
import PageProfile from "./pages/page-profile";
import PageTimeline from "./pages/page-timeline";
import TableBasic from "./pages/table-basic";

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
import UiNotification from "./pages/ui-notification";
import UiProgress from "./pages/ui-progress";
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
            <Route path={`/bet-record`} component={BetRecord} />

            <Route path={`/app-contact-detail`} component={AppContactDetail} />
            <Route path={`/app-contact`} component={AppContact} />
            <Route path={`/app-ticket`} component={AppTicket} />

            <Route path={`/corporate-pages`} component={CorporatePages} />

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
            <Route path={`/form-validations`} component={FormValidations} />
            <Route path={`/form-wizard`} component={FormWizard} />

            <Route path={`/mail-compose`} component={MailCompose} />
            <Route path={`/mail-index`} component={MailIndex} />
            <Route path={`/mail-view`} component={MailView} />

            <Route path={`/page-blank`} component={PageBlank} />
            <Route path={`/page-faqs`} component={PageFaqs} />
            <Route path={`/page-invoice`} component={PageInvoice} />
            <Route path={`/page-pricing`} component={PagePricing} />
            <Route path={`/page-profile`} component={PageProfile} />
            <Route path={`/page-timeline`} component={PageTimeline} />

            <Route path={`/table-basic`} component={TableBasic} />

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
            <Route path={`/ui-notification`} component={UiNotification} />
            <Route path={`/ui-progress`} component={UiProgress} />
            <Route path={`/ui-typography`} component={UiTypography} />
            <Route path={`/widgets-apps`} component={WidgetsApps} />
            <Route path={`/widgets-data`} component={WidgetsData} />
          </Layout>
          <Route path='*' component={Page404} />
        </Switch>
      </BrowserRouter>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

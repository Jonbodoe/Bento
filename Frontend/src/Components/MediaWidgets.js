import React from 'react';
import {
    Switch,
    Route,
    // withRouter,
    Link
  } from "react-router-dom";
import WidgetData from '../Data/WidgetData';

const MediaWidgets = () => {
    const dataList = WidgetData
    const widgets = dataList.map((data, i) => (             
        <div className="col-sm-4 widget" key={i}>
            <Link to={data.link}>
            <div className="text-center shadow p-5 text-dark">
                <i className={`fab ${data.icon} icon-logo `}></i>
                <h4 className="font-weight-bold pt-5">{data.title}</h4>
            </div>
            </Link>
        </div>
    ))
    const widgetRoutes = dataList.map((route, i) => (
        <Route exact path={route.link} key={i}>
            {route.JSX}
        </Route>
    ))
    return (
        <div className="row d-flex justify-content-between">
            {
                widgets
            }
            <Switch>
                {
                    widgetRoutes
                }
            </Switch>
        </div>
    )
}
export default MediaWidgets
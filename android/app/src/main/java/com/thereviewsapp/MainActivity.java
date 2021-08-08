package com.thereviewsapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate; //added 1
import com.facebook.react.ReactRootView; //added 1
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; //added 1

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "theReviewsApp";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  } // added 1
}

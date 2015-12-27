/*
 <div>You've clicked <span data-bind='text: numberOfClicks'>&nbsp;</span> times</div>
 
 <button data-bind='click: registerClick, disable: hasClickedTooManyTimes'>Click me</button>
 
 <div data-bind='visible: hasClickedTooManyTimes'>
    That's too many clicks! Please stop before you wear out your fingers.
    <button data-bind='click: resetClicks'>Reset clicks</button>
 </div>
 
  */

ClickCounterViewModel = function() {
 this.numberOfClicks = ko.observable(0);
 this.registerClick = function() {  this.numberOfClicks(this.numberOfClicks() + 1); };
this.resetClicks = function() { this.numberOfClicks(0)}
 this.hasClickedTooManyTimes = ko.pureComputed(function() {  return this.numberOfClicks() >= 3}, this0)
 }

 ko.applyBindings(new ClickCounterViewModel());
//https://www.youtube.com/watch?v=xnBROE-RHW0 15:30 talks koColls

 
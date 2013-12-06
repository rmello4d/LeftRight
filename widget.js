WAF.define('LeftRight', function() {

    var widget = WAF.require('waf-core/widget');
  
    //creating the widget
    var LeftRight = widget.create('LeftRight');
    
    // inheriting from the composed behavior
    LeftRight.inherit(WAF.require('waf-behavior/layout/composed'));       
    
       
    // creating empty <div> widgets 
    var simple1 = widget.create('simple1');
    var simple2 = widget.create('simple2');
    
    // setting each part of the composed with an empty widget                      
    LeftRight.setPart('left', 	simple1); 
    LeftRight.setPart('right', 	simple2);
  

	// define the widget's init method
 	LeftRight.prototype.init = function() {
    
    	// adding a general class to the widget
        this.addClass('waf-skin-box');
              
        //creating an internal event that will change the color of the content to yellow       
 		$(this.node).on('click', function() {
			this.getPart('left').style('background', 'gray');
		}.bind(this));
	}
	return LeftRight;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html71.html

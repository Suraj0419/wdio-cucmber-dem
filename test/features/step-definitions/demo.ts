import { Given, Then, When } from "@wdio/cucumber-framework";
import {expect} from 'chai';



Given(/^Browser is opened$/,async function(){
 await browser.url("http://www.google.com");
 await browser.pause(3000);
})

When(/Search with (.*)$/,async function (searchTerm) {
    let ele = await $('[name=q]')
   await  ele.setValue(searchTerm);
   await browser.keys('Enter')
})

Then(/^Click on the first result$/,async function(){
 let ele =await $('h3');
 await ele.click();
})

Then(/^Check whether it matches (.*)$/,async function(clickedVal){
const val=await browser.getUrl();
expect(val).to.equal(clickedVal)
})
# PERN-EcommerceApp

This is a Full Stack PERN Stack Application (Postgres, Express, Node, React) 
Based on Ecommerce Store, in which a user is able to select products, add them to their cart, log in to save their cart and then checkout. Once
checked out, the user can see any of their previous orders in the member area.


## Project Description
This is the most complex project i have completed so far, but ultimately, i'm satisfied with how i've met all of the criteria for it.
The hardest part of this project was setting up the authentication/session, and having it persist through the user leaving the page 
to access the Google log in / Stripe Checkout.


### Languages and Libraries Used

* React
* Redux
* Node.js
* Express.js
* Express-Session
* Passport.js
* Google Passport
* Stripe Checkout
* Axios
* Bcrypt
* PostgreSQL
* Node-Postgres
* Framer-Motion
* HTML
* CSS
* JavaScript


### Project Demonstration 

<ins> Home Page </ins>
![homePage](https://user-images.githubusercontent.com/90611253/208539010-c7a75ae0-c6c5-4a8d-a677-83992cb5d73c.png)
* This is the Homepage of the OneBillion Clothing Store, on which a user can see some of the seasonal display images, see a few of
the products which are coming soon to the Store, or find a list of brand items which we stock.

<ins> Product Page </ins>
![productPageExample](https://user-images.githubusercontent.com/90611253/208539227-a5861cc5-d8a5-4d9d-bd55-efc74ff1c498.png)
* Here we can see an example of a product page, where the user is provided with all the information about the item, as well
as some reviews from previous customers, and just below out of shot, the user is provided with a recommended section which links to 
more of our items.

<ins> Log In Prompts </ins>


![LoginPrompt](https://user-images.githubusercontent.com/90611253/208540312-f0413c15-f526-4c93-80ee-3a831bb06955.png)
* Throughout the site the user is occasionally reminded to log in, and it's required to checkout. When the user logs in, 
items in their temporary shopping cart will be added to their permanent one, which will then persist through log ins.

<ins> Log In Page </ins>
![LogInPageExample](https://user-images.githubusercontent.com/90611253/208540449-178374a7-6110-4d1f-8728-3bb51ba007e6.png)
* Here is an example of the login page, which also offers the option to login with a Google account.

<ins> Google Sign In Example </ins>


![GoogleSignIn](https://user-images.githubusercontent.com/90611253/208540665-a9b7c62d-5d0a-47b2-918a-37ead6126867.png)
*An Example of the Google Page

<ins> Pre-Payment </ins>
![preCheckoutPage](https://user-images.githubusercontent.com/90611253/208540561-aeb45d3f-ab78-4873-b513-9e3833339af9.png)
*Just before accessing the Stripe Checkout, the member can check on their chosen items, and change the quantity or remove them.

<ins> Payment Example </ins>
![stripeCheckoutExample](https://user-images.githubusercontent.com/90611253/208540748-dea43576-2341-41ff-9c78-0f1e5428ed15.png)
*We can see that when the member accesses the payment page, they get a final chance to check their items and the price before they go through
with payment.

<ins> Completed Orders </ins>
![postCheckoutOrder](https://user-images.githubusercontent.com/90611253/208540877-0005137c-c8d8-47d2-8946-94042e052953.png)
*Once the user has paid, they can navigate to their account page, and their previous order is displayed here, along with any other ones they have made.

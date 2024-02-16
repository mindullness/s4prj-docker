# Prerequisite: <a href="https://docs.docker.com/get-docker/"><img src="https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-2013.png" width="69"></a>
> Please have [Docker](https://docs.docker.com/get-docker/) installed! 
>
<br>

#
# <br><span style="color:#D63484; text-align:center; display: block;"> Setup </span> </br>

### Step 1: Clone the project 
```bash
git clone https://github.com/mindullness/s4prj-docker.git
```
### Step 2: Change to the directory <span style="color:orange">`s4prj-docker`</span>
```bash
cd s4prj-docker
```
### Step 3: Run command, and wait few minutes
```css
docker-compose up --build -d
```

- #### All services started
![img_2.png](./readme/img_2.png)
- #### MS SQL database container's health checked
![img_1.png](./readme/img_1.png)
- #### Backend container initialized database records
![img.png](./readme/img.png)

##
Then here we go
##
# <br><span style="color:#D63484; text-align:center; display: block;"> Booking </span> </br>

#### 1. Access browser on <a href="http://localhost:3000/" target="blank">localhost:3000</a>, on the current day, only <span style="color:yellow;">`Hanoi (HAN)`</span> and <span style="color:yellow;">`Ho Chi Minh (SGN)`</span> destinations are available:
![Access browser](./readme/image.png)

#### 2. Select your flight
![Alt text](./readme/select-flt.png)
![Select your flight](./readme/next-btn.png)

#### 3. Input your information
![Input your information](./readme/input-info.png)

#### 4. Select Seat For Departure
![Select Seat For Departure](./readme/seat-select.png)

#### 5. Payment with PayPal (dev-sandbox) account
- Login account:
  - Username: flight@personal.example.com
  - Password: flight@123

![Payment with PayPal](./readme/paypal.png)

#### 6. Complete Payment
![Complete Payment](./readme/pay-complete.png)

#### 7. Ticket itinerary (Booking Number)
![Ticket Itinerary](./readme/itinerary.png)

#
# </br><span style="color:#D63484;text-align:center; display: block">Check-In - Get Boarding Pass</span> </br>

#### 1. Search PNR
- Back to Homepage
- Choose Manage Booking
- search PNR from the Initerary, here is "D4472F"

![Alt text](./readme/manage.png)  

#### 2. Choose your flight to check-in
![Alt text](./readme/choose-flt.png)

#### 3. Select passenger
![Alt text](./readme/select-pax.png)

#### 4. Aggree Term & Conditions
![Alt text](./readme/terms.png)

#### 5. Save your Boarding Pass
![Alt text](./readme/bpass.png) 
![Alt text](./readme/save-bpass.png)

#
#
# <span style="color:#D63484; text-align:center; display: block"> ✈️ Enjoy Your Flight !!! </span> 
##

#
# </br><span style="color:#D63484;text-align:center; display: block">Clean Up</span> </br>

#### 1. Run command below and wait `Docker` to stop, and remove all containers. 

```css
docker-compose down
```
![Alt text](./readme/dkr-compose-down.png)

#### 2. Delete all the images
![Alt text](./readme/delete-images.png)

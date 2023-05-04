//sk_test_51N42fLSCHdVx8ak9Nb9IkvAQsUpbwDbxRoUYRtz55mm8gpWwnqWm0FVg2g42SdINUHZgXeyManMYUjseTyqG5uYy00eHLvzJdZ

//coffee; price_1N42kFSCHdVx8ak9onKh9UpD
//sunglass: price_1N42l8SCHdVx8ak983DGYP4L
//camera: price_1N42lhSCHdVx8ak9N1scBGAJ

const express=require('express');
let cors = require('cors');
const stripe = require('stripe')('sk_test_51N42fLSCHdVx8ak9Nb9IkvAQsUpbwDbxRoUYRtz55mm8gpWwnqWm0FVg2g42SdINUHZgXeyManMYUjseTyqG5uYy00eHLvzJdZ');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));
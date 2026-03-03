import logo from './logo.svg';
import video_banner from './home_video_banner.mp4';
import people_org from './people_org.png';
import people from './people.png';

export const assets = {
    logo,
    video_banner,
    people_org,
    people
}

export const steps = [

    {
        step: "Step 1",
        title: "Select on image",
        description: `First, choose the image you want to remove the background from by clicking on "Start from a photo."
                Your image format can be PNG or JPG. We support all images dimensions.`
    },
    {
        step: "Step 2",
        title: "Let magic remove the background",
        description: `Our tool automatically removes the background from your image. Next, you can choose a background colour.
                Our most popular options are white and transparent backgrounds, but you can also select any colour you like.`
    },
    {
        step: "Step 3",
        title: "Download your image",
        description: `After selecting a new background colour, download your photo and you're done!
                You can also save your image in the Photoroom App by creating an account.`
    }
];

export const categories = [
    "People",
    "Product",
    "Animal",
    "Cars",
    "Graphics"
];

export const plans = [
    {
        id: "Basic",
        name: "Basic Package",
        price: 499,
        credits: "100 credits",
        description: "Perfect for individuals use",
        popular: false
    },
    {
        id: "Premium",
        name: "Premium Package",
        price: 899,
        credits: "250 credits",
        description: "Perfect for businesses use",
        popular: true
    },
    {
        id: "Ultimate",
        name: "Ultimate Package",
        price: 1499,
        credits: "1000 credits",
        description: "Perfect for enterprises use",
        popular: false
    }
]
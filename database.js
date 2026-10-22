const products = [
            {
                id: 1,
                name: "Pink Mesh Back Top",
                category: "wardrobe",
                categoryLabel: "Wardrobe",
                price: "₱400 - ₱650 (can customize)",
                description: "Handcrafted crop-top two-way string style. Made using soft, mixed color, breathable 100% milk cotton yarn.",
                options: "Sizes: XS to XXL available. All colors available. Note: Made to order, this is just a pricelist.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/611321693_1519270506865904_574648247094822557_n.jpg?stp=dst-jpg_tt6&cstp=mx992x1056&ctp=s992x1056&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFURoYwZxZgI4Mm6fkpcn2eDTL2-St3yS4NMvb5K3fJLvrDHxwAdydA2OVxf6KaKu8-5y2tZFI3y4OlM9dROQ1E&_nc_ohc=PmH-9RNbkmUQ7kNvwEJtiHS&_nc_oc=Adq9Ql0GZi-xfm_t0_5Gz1XegtZwGQDGYMQJyUx0oZN07V84Y3UIUoWKIQ-Hm5qKaFWdXAsShnOhCoX78FyL8Wg-&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=YD92SKW8cmEgXJL_SSzETw&_nc_ss=7b2a8&oh=00_AQNPIdzinbp-B2NJ33TUJnCQKn4ICYHkZ2GMwlSlC6zoKw&oe=6ADE0EDA"
            },
            {
                id: 2,
                name: "Card Holder",
                category: "pouch",
                categoryLabel: "Pouch/Wallet",
                price: "₱65 (per piece) ₱40 (bulk orders)",
                description: "Everlasting crocheted tulip flowers tied in kraft paper with satin ribbon. Zero watering needed!",
                options: "Single stem: ₱220 | Trio bouquet: ₱650.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/761364290_2244925229655028_1982717502921176722_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHEjKGA6vZib0pTirMyaDZL9lrrg3ZoYq_2WuuDdmhir0he_F_bj2U2U2CmucBWU_g4HCoZYtqlCkqnyO3lIqXU&_nc_ohc=sMIN641JY0sQ7kNvwG6W4zV&_nc_oc=AdrYyPeDQRiZM_pwV31XPLQBfd2TDJaKtqZww9dPQzx7_Zn9ncyn5tU-ekZdDqDIZAT1SrQ2Zcizvf3pRui-GXhI&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=_GyTGxy-IXSntq9qPpl_rA&_nc_ss=7b2a8&oh=00_AQPFglBc7YxVAEqXO95YK7-M-_xX2hvwUC7zby7mLV2swA&oe=6ADFA7CE"
            },
            {
                id: 3,
                name: "Chibi Crocheted Characters",
                category: "amigurumis",
                categoryLabel: "Amigurumi",
                price: "₱450 - ₱2,500 (can customize)",
                description: "",
                options: "You can send me inspo, and details for the character also the size. Note: Made to order, this is just a pricelist.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/855259626_1776348434285702_5632558084272914522_n.png?stp=dst-jpg_tt6&cstp=mx896x1195&ctp=s896x1195&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFXHTkZf4HJYXiF1z2CH4XzXDYgBGAKK7FcNiAEYAorsVHMYXcL5CGXLPKlQntLq1X3__tunje_4vmINFi7JK8s&_nc_ohc=J_xmLcy84C4Q7kNvwEz8d7I&_nc_oc=AdoiXhdtoxemRpJtYRZp573qy2sowbHBdBOWmaxWym46Js84cvx0aJd4WlKrqgtI3yDB8wIhfs7eOnYiiPIwDY7k&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=AZp5jFiwHKST44iTHjGNCg&_nc_ss=7b2a8&oh=00_AQNoR4kthW8v8tUWt1txgWuXYvwO1zF2RSxyrKFG0DFCjQ&oe=6ADE08C8"
            },
            {
                id: 4,
                name: "Purple Two-Way Bag",
                category: "bags",
                categoryLabel: "Bags",
                price: "₱350 (fixed price)",
                description: "Miniature spotted red or pastel cap mushroom bag charm with gold lobster swivel clasp.",
                options: "Cap Color Options: Apple Green, Warm Pink, Soft Lavender, Cream.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/799843833_4506672479661367_2754544163990443205_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFdxfF2c1BYWubLj0yoBbSJ5qVkyp5cSCbmpWTKnlxIJhBffvRt8tMvU02LSxVvhmtXweAMPpd34BdLmKi9tRim&_nc_ohc=FmDHDCLFjHwQ7kNvwEJpunu&_nc_oc=AdqDRPZauKxALPHx8I0lUidDu6n6-zgM2Yjjx-tHLwSMAoAi-_DYLIKxqwCUtC9YOsnONM35uj-9D3myXlw_4tEN&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=DdYKXBAl9MbPmNwYNSy9zA&_nc_ss=7b2a8&oh=00_AQO3jVIBsGgFKgtra97pm9tLtpkHcD1xVN40KiS48UOoSQ&oe=6ADE1B48"
            },
            {
                id: 5,
                name: "Single Flower Hairclips",
                category: "hair_accesories",
                categoryLabel: "Hair Accesories",
                price: "₱35 (per piece) ₱20 (bulk orders)",
                description: "Micro crochet boba cup featuring embroidered tapioca pearls and a tiny straw attachment.",
                options: "Flavors: Taro Lavender, Matcha Green, Strawberry Pink, Classic Milk Tea.",
                image: "https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.30808-6/605333419_1509522707840684_7557331121831109345_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2047&ctp=s2048x2047&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEsIdqwrVAL9AmMCKCCkrghy_Adm7JJIXHL8B2bskkhcZXQdSpTw_XEUzO3KyG2TAE5gAbggS4wz-rJk6_dgqQW&_nc_ohc=iFOBUJEKNlcQ7kNvwFgFfmX&_nc_oc=AdphtWNS7QGWGAZSXYBMuoMyFdmO1MP7JzqLeLW_HizKkVBFt29wdEKaQC2VNFFvVZYUEUvMx9n-cEIgJSVmkZWX&_nc_zt=23&_nc_ht=scontent.fcrk3-3.fna&_nc_gid=toiT_GOpHVD1a1su7pi1SA&_nc_ss=7b2a8&oh=00_AQNyQ2bqWiq6DtPs3dWWNR6YW6Zz_CsIs6Td9pCpokDE7Q&oe=6ADE0F14"
            },
            {
                id: 6,
                name: "Big Fairy Bouquet",
                category: "bouquet",
                categoryLabel: "Bouquet",
                price: "₱1,500 (can negotiate)",
                description: "Round chubby frog plush crocheted with ultra-soft velvet chenille yarn and safety eyes.",
                options: "Includes mini detachable sweater or sprout hat accessory.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.99422-6/841439163_958778233444990_6814493635369709199_n.png?stp=dst-jpg_tt6&cstp=mx896x1195&ctp=s896x1195&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE8rxiq9J5HaaAVaqwq6lF0FhpIVVV5T-EWGkhVVXlP4bS8mrUDdwWTy1o4Eo9GY8ZR-YsupqTw2CCv1xB4gNB6&_nc_ohc=lYFC_p9VtyUQ7kNvwEUIwED&_nc_oc=AdoMYhkVbdwsC5rkFOR_Iar6nz9wNnB6inAF5Y9fD1-7jLIqdKZNXVkIgRnEsiWzwlgR-efQ-Z4vdlMN-PmJ_Vdt&_nc_zt=14&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=-y9iX37pi90fpEvz8MkWrw&_nc_ss=7b2a8&oh=00_AQMBQr8BPPDWntqICj4FlupagQ17lqywDgVf5zGjIBhA2A&oe=6ADE23D9"
            },
            {
                id: 7,
                name: "Mirror Bag Charm",
                category: "bag_charms",
                categoryLabel: "Bag Charms",
                price: "₱135 (per piece) ₱80 (bulk orders)",
                description: "Cuddle-sized teddy bear wearing a striped sleeping cap filled with hypoallergenic fiberfill.",
                options: "Medium (8\"): ₱750 | Large (12\"): ₱1,100.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/659061115_1599085118884442_8583126500532390049_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHlgr-9IvOHHf6LVuxds6LEg_FEcYZiVAKD8URxhmJUAvWFOsgZveqrqa1hb-A6DnvIHMBVuOD1vvbNxwCDdqvi&_nc_ohc=hmEtQawIgGUQ7kNvwHm1MHP&_nc_oc=AdrnkuSny8ww7Ha7KSZ61Oosj3BlYYmquyvIB0k5y1W1xxnxC6FBNrhwT-G7RXDKNC5nrmfpJ-QMUht0Iaw24EOI&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=U1zt-EhIQjmucYbwPa6OQg&_nc_ss=7b2a8&oh=00_AQM9v7-KQML-W8dZBUj0OsKnxBlofVlq4TQ8Eb15U4pv3A&oe=6ADDF86D"
            },
            {
                id: 8,
                name: "Warm Color Bandana Top",
                category: "wardrobe",
                categoryLabel: "Wardrobe",
                price: "₱350-₱750 (can customize)",
                description: "Whimsical warm color top for summer fit. Crocheted by Nikka Yesha.",
                options: "Elastic waist band customized to your measurements. Colors: Apple Green, Pink, Cream.",
                image: "https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.30808-6/657141495_1594408716018749_5010393596574956447_n.jpg?stp=dst-jpg_tt6&cstp=mx1195x896&ctp=s1195x896&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFjnLtQM1rTq7lkuD2qqb5yA6C9FFMrLLsDoL0UUyssu2BOxjp1Je5LM56BG5qOj1b7oQjHsh9i4ptUD-rLFtTj&_nc_ohc=w_spKDGDgjAQ7kNvwHccieF&_nc_oc=AdrSs67PUQkpeQjy06aF4E7Fg5mjfKKR95kfH1d0lt5UmjCu-QXtEol6acpcYYLLR9clzjqNfZDeFbnwuRjnXjFc&_nc_zt=23&_nc_ht=scontent.fcrk3-3.fna&_nc_gid=_CmE16oxEYS0GLoj_yQqGQ&_nc_ss=7b2a8&oh=00_AQOzurIp4EFdrbHMG4Xw5tb6_C2F2Pq4G-sTE0BpzlUCGQ&oe=6ADDE8BC"
            },
            {
                id: 9,
                name: "Coaster",
                category: "desk_figures",
                categoryLabel: "Desk Figures",
                price: "₱45 (per piece) ₱30 (bulk orders)",
                description: "Sunflower Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/762916533_1720823506710602_3310082661572178657_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s552x414&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH02SqTP9xvaPskx58UpylpfOzmhVPqVPB87OaFU-pU8OfqykLo8fGJ-vJUd0Fwzh5G_Q9SK9t6N4mXGGTrncAu&_nc_ohc=0M1Ci7IaLM8Q7kNvwFdJ9q0&_nc_oc=AdrE6cmVdShQqMLeGKcwmQmZFXdAPB44OWSYVBJ4CYELHr0TUvdIvHOdWWnVUIRQVcVJWIFc0CKc8U7OhHTk5VP0&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=-8sjiWzT-5uiOhXO9kHkbw&_nc_ss=7b2a8&oh=00_AQPJgFLN8kspK_MaSgNeYpBDmqHxCl2D8UyWJ86ajE0ZhQ&oe=6ADE196D"
            },
            {
                id: 10,
                name: "Sunflower Pouch v2",
                category: "pouch",
                categoryLabel: "Pouch/Wallet",
                price: "₱79 (per piece) ₱59 (bulk orders)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/597557508_1496377899155165_5123503682846945363_n.jpg?stp=dst-jpg_tt6&cstp=mx864x1184&ctp=s864x1184&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF781wyCsqIIJA9hfZoqkyjUk_JcpBAR5RST8lykEBHlFWEW-i4glsaaA393wedUS-DKcMvB2daRh4CoHrfq4QM&_nc_ohc=FqEHcZVq_fAQ7kNvwGQIWsM&_nc_oc=AdrFgRh-s-XtMxBEYTNK4MneW61VcaARJcq1XNw_Gfz337lJL36qvUtnOg51-CjyBqy5cMI1G97G9u_m_eeaJqrk&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=GoDX9KSS2FQVSBaiEbinFQ&_nc_ss=7b2a8&oh=00_AQNLnNA5fswfPK7yPTtKHbo7fkpDx8B2FObLHDo03ncSIw&oe=6ADFB3A6"
            },
            {
                id: 11,
                name: "Lavander Hairclip",
                category: "hair_accesorries",
                categoryLabel: "Hair Accesories",
                price: "₱39 (pair) ₱25 (bulk orders)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/594969482_1492349439558011_8517642575810589016_n.jpg?stp=dst-jpg_tt6&cstp=mx864x864&ctp=s864x864&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEzNlbWqyHMPBWgEUNHlP92D5jHeo4hbFkPmMd6jiFsWXgVK0zJeXGt6PNQV_6LMgDxRcsEnxZTTKYPzQxyuxxW&_nc_ohc=5xjQL3J7bRgQ7kNvwENSvDP&_nc_oc=Adp7dsI5_GLG9TH3Tv5UHkH6HVhA_KfRzC5brn3uR6sSNy1xCwayISKrJ1u4WAsg7wY39AO4j6n_rKAKJo6lHMIp&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=VJpG8wTHDK1ovN7XRjpW3w&_nc_ss=7b2a8&oh=00_AQPBWSHd6IIk57mN6Ie-kJlWucpzagncLad0G6a2pgbURg&oe=6ADFA00A"
            },
            {
                id: 12,
                name: "Purple Flower Hairtie",
                category: "hair_accesorries",
                categoryLabel: "Hair Accesories",
                price: "₱45 (pair) ₱30 (bulk orders)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/763103101_1452208223465338_1953702346269815674_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGU8jYLzypxwvoBlw02Gy2YYd6z42VI3cRh3rPjZUjdxAPnSkUyuK3qWZVryGfdIfL5rx9qT3MmaNRNl05ydejT&_nc_ohc=58JzCqdF-TkQ7kNvwFZVd1C&_nc_oc=Adryae_Dal3sFsPI2gR_MQGwp44LYnZbUbEYfgOG55unSCfUjzjXclcrrpQQvdI7eOfrOp69YDHkTESuK_VzEJrS&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=7EyoTl4cr-vAsnCbnoCMjQ&_nc_ss=7b2a8&oh=00_AQMYkyn5BclecSBSdzWe8VAXpaxeAMf_MLD9ZRa0rmkfNg&oe=6ADF9920"
            },
            {
                id: 13,
                name: "Daisy Flowers",
                category: "bouquet",
                categoryLabel: "Bouquet",
                price: "₱59 (per stem) ₱40 (bulk orders)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.30808-6/617657348_1527684269357861_2437492417485515074_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1920&ctp=s1080x1920&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHk6xA_GzkTdhqRTd4Tk1x7DBnNXcA1Z7QMGc1dwDVntN3DpG57NRsuSFvYCpw6ElOCln4nhkNNor8oermDB1OZ&_nc_ohc=SmSfL1ZLtOcQ7kNvwEZkI61&_nc_oc=AdpgEIokDNB_Nvzzh0FMFPHf_7vIZrbr5E_ZdPhS-WMtNX6Pckia1TKyWPsDaVqlsZDAcrsSC7QW6dKhCphTb5bZ&_nc_zt=23&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=COku_8gTKu8GdJoyFAZ5WQ&_nc_ss=7b2a8&oh=00_AQOKavs46k9Q3xs6lbofkFD_30MGNYefV1Qbexw9CbLmkw&oe=6ADF9A45"
            },
            {
                id: 14,
                name: "Stand Alone Big Bouquet",
                category: "bouquet",
                categoryLabel: "Bouquet",
                price: "₱1,000 (can customize)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/651042289_1579136990879255_2377852365037600308_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGLaAtF748vsv3dypdCVzinQIRbZkc8f61AhFtmRzx_rUqJV7m-xJnhA3qLYluk6SeO_gfhdahiIsikyIHiPDwZ&_nc_ohc=Vr1vA0rG8xIQ7kNvwFcb2mQ&_nc_oc=Ado4uXM8nevTceC2mTvJFXLr_kk8_GpTmdQhwuFSQA4NS9nJJgdbR1bZMF0Jp8jWc2ZJy_VQfD5r_tLFpNOmU-kZ&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=9PLq_nnZZyGHGIu8Af8HVw&_nc_ss=7b2a8&oh=00_AQNUQhIeaWQWvx0_XySyMURUN4nlpNheaJfXAj4aA5KTCw&oe=6ADFB991"
            },
            {
                id: 15,
                name: "Couquette Heart Keychain",
                category: "keychains",
                categoryLabel: "Keychains",
                price: "₱35 (per piece) ₱20 (bulk orders)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.30808-6/670412248_1607563064703314_2042308340337885108_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEYxDfyKAj5XvVw8xNcJETt_MqpwyfohfL8yqnDJ-iF8psB--d-Da8qGGKCUKle4mVrUzF-1tYCE8j0s-EG7JG5&_nc_ohc=I-fHiN2-cIMQ7kNvwEjCnG4&_nc_oc=AdrCZP38GoKM5KOgyCYROf_Zfn5cEkMzvhkioMMxSTFlXkGBxHvOqeGexg1ReaZaA5FYPLjuzMNYKE0ZIEH9_zTv&_nc_zt=23&_nc_ht=scontent.fcrk3-3.fna&_nc_gid=z8I79DVkzwvWi6wh1FjZCQ&_nc_ss=7b2a8&oh=00_AQOmxTQAIN5UxQ6bdTMk1Fdvhi9-6lJYu-l7JX8UZSo_cw&oe=6ADF88AE"
            },
            {
                id: 16,
                name: "Pearl Circular Bag",
                category: "bags",
                categoryLabel: "Bags",
                price: "₱359 (can customize)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.99422-6/789034073_2891781271163576_6594214648410064482_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGnnw7wAwj8xUj01uh18jOU__XIN0Kp2qP_9cg3Qqnao8AIbc0AmXVJ0li9dD2ebghnT-oM8u87vTKs5xFYk7z_&_nc_ohc=ZIQe7T5ECwMQ7kNvwGH9Mf8&_nc_oc=AdqyzzhNKlA1xLvVxwX49A2klLV0OeJO6pLaj9r330XjaqNsG1H-uiPXmV7wWYJNH1ONbOQ3fPL0O5gy7AYskGBL&_nc_zt=14&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=5Kgduhq7HjcIJ38KVEUQPw&_nc_ss=7b2a8&oh=00_AQPFaCdqOyN1ckbQZ0Vwa41CvlpX9-ghI7ThpjL3ASV7qg&oe=6ADFB626"
            },
            {
                id: 17,
                name: "Sunflower in a Pot",
                category: "desk_figures",
                categoryLabel: "Desk Figures",
                price: "₱69 (per piece) ₱45 (bulk orders)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.30808-6/766748152_1720823293377290_8821143316213952086_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s552x414&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGatsT9cbtDA5ZRLzKGJmCpHRC8OdkxBWkdELw52TEFaXHFcA56AhjPqZnPVJX6RdFdijsTUs72WR3Q_0hwLfBa&_nc_ohc=BURZHiGiW8wQ7kNvwGYb7NR&_nc_oc=AdpKmnJEfNj6TH17URNeMFRJDaT34hyaYopQ7tSZ6YwKuFLpOEigR3OYA2AcQ3dl-OYAFXKwYxPes3zhD0KQ5S6B&_nc_zt=23&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=1uBt1fzihxqR7FYZsId3nw&_nc_ss=7b2a8&oh=00_AQPD2mq46_Litr5zQssBxMTOmnaywFZZ4lk7tkqdV2NMxg&oe=6ADFBB9Chttps://scontent.fcrk3-4.fna.fbcdn.net/v/t39.30808-6/766748152_1720823293377290_8821143316213952086_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGatsT9cbtDA5ZRLzKGJmCpHRC8OdkxBWkdELw52TEFaXHFcA56AhjPqZnPVJX6RdFdijsTUs72WR3Q_0hwLfBa&_nc_ohc=BURZHiGiW8wQ7kNvwGYb7NR&_nc_oc=AdpKmnJEfNj6TH17URNeMFRJDaT34hyaYopQ7tSZ6YwKuFLpOEigR3OYA2AcQ3dl-OYAFXKwYxPes3zhD0KQ5S6B&_nc_zt=23&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=jfPKV5sXIM5Dd2W3mrTX9g&_nc_ss=7b2a8&oh=00_AQPa8JmhlRFLDbgbhwm8TkFQWa5zPsNWbxmML3X0IIXDkg&oe=6ADFBB9C"
            },
            {
                id: 18,
                name: "Jellyfish Charm v1",
                category: "keychains",
                categoryLabel: "Keychains",
                price: "₱79 (per piece) ₱55 (bulk orders)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.30808-6/611156710_1514319544027667_2698317585166430103_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG68DkZnftRu9Wf6ld2u2pXtV3SIOtnxWe1XdIg62fFZ_j18gpVU7thPD2ORh-t8CPwuz-nbygcYoIbOvkclztB&_nc_ohc=0kmQ9-EJKE8Q7kNvwE86pig&_nc_oc=AdpdR0Q051ChefKN2AgrfS2COKQVLGdwvvsLAKEThP3Ua6bazWlBMduw0sJkaCamkxzoWapdDnsgPZCwvJXHYlmN&_nc_zt=23&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=OEXRGQSWSfge37mt5-Xwug&_nc_ss=7b2a8&oh=00_AQOWAP-gH32ks8BTVY4dDrF_fkJrPD95GoUg2P6JJCKmig&oe=6ADF8DBC"
            },
            {
                id: 19,
                name: "Orange Pouch",
                category: "pouch",
                categoryLabel: "Pouch",
                price: "₱65 (per piece) ₱45 (bulk orders)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.99422-6/763263256_27710626651956388_3150015094955685341_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE3kbotjyQ6Q--KiLHlAzNr4IKlyMDeGcXggqXIwN4ZxT9oKrHIa5or33ZqVWdloc3RqoGJtz0H-zF7ZRS4rXir&_nc_ohc=d-DagB9pi_cQ7kNvwFUw2gy&_nc_oc=Adq8fMoo_vrjh0bl-SnwcjZ09bpE_hkM4mNRMFb1n86KENMkBVXvRSgQ44Sp4P9gc0Db5gmQ8YS5ZzeD6VJJ3MZU&_nc_zt=14&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=1HC5Maz6rFM0IoNQ50-huw&_nc_ss=7b2a8&oh=00_AQO-1fKRVTrjpyWA5ACTz57aGTg-I9MR71ZwWEdSR7SWkQ&oe=6ADF9702"
            },
            {
                id: 20,
                name: "Regular Rose",
                category: "bouquet",
                categoryLabel: "Bouquet",
                price: "₱65 (per stem) ₱50 (bulk orders)",
                description: "Retro checkered tote bag with reinforced double-stitched shoulder straps that resist stretching.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/699700797_1637609585031995_9063267593616586854_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGVnbInDyn0sCFxC_U9U0fkS51TbOkadZBLnVNs6Rp1kFCTHB4rJOwcz499rF9QZ6kFDwq1hkyBJcGlKzjCpgnw&_nc_ohc=nG_aVLd9vzkQ7kNvwGTfP5H&_nc_oc=AdqH0UpX18iupWC1GBXQs6Qn8a3xieAR7Pt1YzWDRsSr3u1dVODA87fKlp3RTFIDEzJ4hYZ37OEamtJd3hmoSGTv&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=buF4ybdtg0Hz6xsDFAcVYA&_nc_ss=7b2a8&oh=00_AQO7EHTis6wr7J4OqxDPu53kr2waFJ-OAq-1slaF_pdI3Q&oe=6ADFC297"
            },
            
        ];
const products = [
            {
                id: 1,
                name: "Pink Mesh Back Top",
                category: "wardrobe",
                categoryLabel: "Wardrobe",
                price: "₱400 - ₱650 (can customize)",
                description: "Handcrafted crop-top two-way string style. Made using soft, mixed color, breathable 100% milk cotton yarn.",
                options: "Sizes: XS to XXL (pre-order). All colors available.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/611321693_1519270506865904_574648247094822557_n.jpg?stp=dst-jpg_tt6&cstp=mx992x1056&ctp=s992x1056&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFURoYwZxZgI4Mm6fkpcn2eDTL2-St3yS4NMvb5K3fJLvrDHxwAdydA2OVxf6KaKu8-5y2tZFI3y4OlM9dROQ1E&_nc_ohc=PmH-9RNbkmUQ7kNvwEJtiHS&_nc_oc=Adq9Ql0GZi-xfm_t0_5Gz1XegtZwGQDGYMQJyUx0oZN07V84Y3UIUoWKIQ-Hm5qKaFWdXAsShnOhCoX78FyL8Wg-&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=YD92SKW8cmEgXJL_SSzETw&_nc_ss=7b2a8&oh=00_AQNPIdzinbp-B2NJ33TUJnCQKn4ICYHkZ2GMwlSlC6zoKw&oe=6ADE0EDA"
            },
            {
                id: 2,
                name: "Card Holder",
                category: "pouch",
                categoryLabel: "Pouch/Wallet",
                price: "₱65 (per piece) ₱40 (bulk orders)",
                description: "Color: Pink mixed with white | Size: 3.5in x 4in | Closure: Snaplock | Materials: Soft Indophil Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for bulk orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/761364290_2244925229655028_1982717502921176722_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHEjKGA6vZib0pTirMyaDZL9lrrg3ZoYq_2WuuDdmhir0he_F_bj2U2U2CmucBWU_g4HCoZYtqlCkqnyO3lIqXU&_nc_ohc=sMIN641JY0sQ7kNvwG6W4zV&_nc_oc=AdrYyPeDQRiZM_pwV31XPLQBfd2TDJaKtqZww9dPQzx7_Zn9ncyn5tU-ekZdDqDIZAT1SrQ2Zcizvf3pRui-GXhI&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=_GyTGxy-IXSntq9qPpl_rA&_nc_ss=7b2a8&oh=00_AQPFglBc7YxVAEqXO95YK7-M-_xX2hvwUC7zby7mLV2swA&oe=6ADFA7CE"
            },
            {
                id: 3,
                name: "Chibi Crocheted Characters",
                category: "amigurumis",
                categoryLabel: "Amigurumi",
                price: "₱450 - ₱2,500 (can customize)",
                description: "Size: 5-6in | This photo is customized order from a customer, based on Valorant Characters/Agents.",
                options: "Open for customize chibi characters. Made to Order.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/855259626_1776348434285702_5632558084272914522_n.png?stp=dst-jpg_tt6&cstp=mx896x1195&ctp=s896x1195&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFXHTkZf4HJYXiF1z2CH4XzXDYgBGAKK7FcNiAEYAorsVHMYXcL5CGXLPKlQntLq1X3__tunje_4vmINFi7JK8s&_nc_ohc=J_xmLcy84C4Q7kNvwEz8d7I&_nc_oc=AdoiXhdtoxemRpJtYRZp573qy2sowbHBdBOWmaxWym46Js84cvx0aJd4WlKrqgtI3yDB8wIhfs7eOnYiiPIwDY7k&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=AZp5jFiwHKST44iTHjGNCg&_nc_ss=7b2a8&oh=00_AQNoR4kthW8v8tUWt1txgWuXYvwO1zF2RSxyrKFG0DFCjQ&oe=6ADE08C8"
            },
            {
                id: 4,
                name: "Purple Two-Way Bag",
                category: "bags",
                categoryLabel: "Bags",
                price: "₱350 (fixed price)",
                description: "Size: | Color: Lavander | Closure: Snaplock | Sling: Chain with Yarn | Materials: Polypropylene Yarn",
                options: "On-hand. All colors available. Please negotiate with me for custom orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/799843833_4506672479661367_2754544163990443205_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFdxfF2c1BYWubLj0yoBbSJ5qVkyp5cSCbmpWTKnlxIJhBffvRt8tMvU02LSxVvhmtXweAMPpd34BdLmKi9tRim&_nc_ohc=FmDHDCLFjHwQ7kNvwEJpunu&_nc_oc=AdqDRPZauKxALPHx8I0lUidDu6n6-zgM2Yjjx-tHLwSMAoAi-_DYLIKxqwCUtC9YOsnONM35uj-9D3myXlw_4tEN&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=DdYKXBAl9MbPmNwYNSy9zA&_nc_ss=7b2a8&oh=00_AQO3jVIBsGgFKgtra97pm9tLtpkHcD1xVN40KiS48UOoSQ&oe=6ADE1B48"
            },
            {
                id: 5,
                name: "Single Flower Hairclips",
                category: "hair_accessories",
                categoryLabel: "Hairclips",
                price: "₱35 (per piece) ₱20 (bulk orders)",
                description: "Size: 7cm | Materials: Milk Cotton Yarn and Beads",
                options: "Pre-Order. All colors available. Please negotiate with me for bulk orders.",
                image: "https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.30808-6/605333419_1509522707840684_7557331121831109345_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2047&ctp=s2048x2047&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEsIdqwrVAL9AmMCKCCkrghy_Adm7JJIXHL8B2bskkhcZXQdSpTw_XEUzO3KyG2TAE5gAbggS4wz-rJk6_dgqQW&_nc_ohc=iFOBUJEKNlcQ7kNvwFgFfmX&_nc_oc=AdphtWNS7QGWGAZSXYBMuoMyFdmO1MP7JzqLeLW_HizKkVBFt29wdEKaQC2VNFFvVZYUEUvMx9n-cEIgJSVmkZWX&_nc_zt=23&_nc_ht=scontent.fcrk3-3.fna&_nc_gid=toiT_GOpHVD1a1su7pi1SA&_nc_ss=7b2a8&oh=00_AQNyQ2bqWiq6DtPs3dWWNR6YW6Zz_CsIs6Td9pCpokDE7Q&oe=6ADE0F14"
            },
            {
                id: 6,
                name: "Big Fairy Bouquet",
                category: "bouquet",
                categoryLabel: "Bouquet",
                price: "₱1,500 (can negotiate)",
                description: "Size: | Materials: Milk Cotton & Indophil Soft Yarn | Flowers Quantity: 10pcs + 5 fillers",
                options: "Pre-Order. All colors available. Please negotiate with me for custom orders.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.99422-6/841439163_958778233444990_6814493635369709199_n.png?stp=dst-jpg_tt6&cstp=mx896x1195&ctp=s896x1195&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE8rxiq9J5HaaAVaqwq6lF0FhpIVVV5T-EWGkhVVXlP4bS8mrUDdwWTy1o4Eo9GY8ZR-YsupqTw2CCv1xB4gNB6&_nc_ohc=lYFC_p9VtyUQ7kNvwEUIwED&_nc_oc=AdoMYhkVbdwsC5rkFOR_Iar6nz9wNnB6inAF5Y9fD1-7jLIqdKZNXVkIgRnEsiWzwlgR-efQ-Z4vdlMN-PmJ_Vdt&_nc_zt=14&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=-y9iX37pi90fpEvz8MkWrw&_nc_ss=7b2a8&oh=00_AQMBQr8BPPDWntqICj4FlupagQ17lqywDgVf5zGjIBhA2A&oe=6ADE23D9"
            },
            {
                id: 7,
                name: "Mirror Bag Charm",
                category: "bag_charms",
                categoryLabel: "Bag Charms/Keychains",
                price: "₱135 (per piece) ₱80 (bulk orders)",
                description: "Materials: Cotton Yarn | Note: Mirror included and can be use as keychain",
                options: "Pre-Order. All colors available. Please negotiate with me for custom & bulk orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/659061115_1599085118884442_8583126500532390049_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHlgr-9IvOHHf6LVuxds6LEg_FEcYZiVAKD8URxhmJUAvWFOsgZveqrqa1hb-A6DnvIHMBVuOD1vvbNxwCDdqvi&_nc_ohc=hmEtQawIgGUQ7kNvwHm1MHP&_nc_oc=AdrnkuSny8ww7Ha7KSZ61Oosj3BlYYmquyvIB0k5y1W1xxnxC6FBNrhwT-G7RXDKNC5nrmfpJ-QMUht0Iaw24EOI&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=U1zt-EhIQjmucYbwPa6OQg&_nc_ss=7b2a8&oh=00_AQM9v7-KQML-W8dZBUj0OsKnxBlofVlq4TQ8Eb15U4pv3A&oe=6ADDF86D"
            },
            {
                id: 8,
                name: "Warm Color Bandana Top",
                category: "wardrobe",
                categoryLabel: "Wardrobe",
                price: "₱350-₱750 (can customize)",
                description: "Whimsical warm color top for summer fit. Crocheted by Nikka Yesha.",
                options: "Pre-Order. All colors available. Please negotiate with me for custom orders.",
                image: "https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.30808-6/657141495_1594408716018749_5010393596574956447_n.jpg?stp=dst-jpg_tt6&cstp=mx1195x896&ctp=s1195x896&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFjnLtQM1rTq7lkuD2qqb5yA6C9FFMrLLsDoL0UUyssu2BOxjp1Je5LM56BG5qOj1b7oQjHsh9i4ptUD-rLFtTj&_nc_ohc=w_spKDGDgjAQ7kNvwHccieF&_nc_oc=AdrSs67PUQkpeQjy06aF4E7Fg5mjfKKR95kfH1d0lt5UmjCu-QXtEol6acpcYYLLR9clzjqNfZDeFbnwuRjnXjFc&_nc_zt=23&_nc_ht=scontent.fcrk3-3.fna&_nc_gid=_CmE16oxEYS0GLoj_yQqGQ&_nc_ss=7b2a8&oh=00_AQOzurIp4EFdrbHMG4Xw5tb6_C2F2Pq4G-sTE0BpzlUCGQ&oe=6ADDE8BC"
            },
            {
                id: 9,
                name: "Coaster",
                category: "desk_figures",
                categoryLabel: "Desk Figures",
                price: "₱45 (per piece) ₱30 (bulk orders)",
                description: "Size: 5in | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom & bulk orders.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/762916533_1720823506710602_3310082661572178657_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s552x414&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH02SqTP9xvaPskx58UpylpfOzmhVPqVPB87OaFU-pU8OfqykLo8fGJ-vJUd0Fwzh5G_Q9SK9t6N4mXGGTrncAu&_nc_ohc=0M1Ci7IaLM8Q7kNvwFdJ9q0&_nc_oc=AdrE6cmVdShQqMLeGKcwmQmZFXdAPB44OWSYVBJ4CYELHr0TUvdIvHOdWWnVUIRQVcVJWIFc0CKc8U7OhHTk5VP0&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=-8sjiWzT-5uiOhXO9kHkbw&_nc_ss=7b2a8&oh=00_AQPJgFLN8kspK_MaSgNeYpBDmqHxCl2D8UyWJ86ajE0ZhQ&oe=6ADE196D"
            },
            {
                id: 10,
                name: "Sunflower Pouch v2",
                category: "pouch",
                categoryLabel: "Pouch/Wallet",
                price: "₱89 (per piece) ₱55 (bulk orders)",
                description: "Size: 14cm | Materials: Milk Cotton Yarn/Soft Indophil Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom/bulk orders.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/597557508_1496377899155165_5123503682846945363_n.jpg?stp=dst-jpg_tt6&cstp=mx864x1184&ctp=s864x1184&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF781wyCsqIIJA9hfZoqkyjUk_JcpBAR5RST8lykEBHlFWEW-i4glsaaA393wedUS-DKcMvB2daRh4CoHrfq4QM&_nc_ohc=FqEHcZVq_fAQ7kNvwGQIWsM&_nc_oc=AdrFgRh-s-XtMxBEYTNK4MneW61VcaARJcq1XNw_Gfz337lJL36qvUtnOg51-CjyBqy5cMI1G97G9u_m_eeaJqrk&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=GoDX9KSS2FQVSBaiEbinFQ&_nc_ss=7b2a8&oh=00_AQNLnNA5fswfPK7yPTtKHbo7fkpDx8B2FObLHDo03ncSIw&oe=6ADFB3A6"
            },
            {
                id: 11,
                name: "Lavander Hairclip",
                category: "hair_accessories",
                categoryLabel: "Hair Accessories",
                price: "₱39 (pair) ₱25 (bulk orders)",
                description: "Size: 5.5cm | Materials: Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/594969482_1492349439558011_8517642575810589016_n.jpg?stp=dst-jpg_tt6&cstp=mx864x864&ctp=s864x864&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEzNlbWqyHMPBWgEUNHlP92D5jHeo4hbFkPmMd6jiFsWXgVK0zJeXGt6PNQV_6LMgDxRcsEnxZTTKYPzQxyuxxW&_nc_ohc=5xjQL3J7bRgQ7kNvwENSvDP&_nc_oc=Adp7dsI5_GLG9TH3Tv5UHkH6HVhA_KfRzC5brn3uR6sSNy1xCwayISKrJ1u4WAsg7wY39AO4j6n_rKAKJo6lHMIp&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=VJpG8wTHDK1ovN7XRjpW3w&_nc_ss=7b2a8&oh=00_AQPBWSHd6IIk57mN6Ie-kJlWucpzagncLad0G6a2pgbURg&oe=6ADFA00A"
            },
            {
                id: 12,
                name: "Purple Flower Hairtie",
                category: "hair_accessorries",
                categoryLabel: "Hair Accessories",
                price: "₱45 (pair) ₱30 (bulk orders)",
                description: "Size: 5in | Materials: Cotton Yarn & Thick Haitie (black)",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/763103101_1452208223465338_1953702346269815674_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGU8jYLzypxwvoBlw02Gy2YYd6z42VI3cRh3rPjZUjdxAPnSkUyuK3qWZVryGfdIfL5rx9qT3MmaNRNl05ydejT&_nc_ohc=58JzCqdF-TkQ7kNvwFZVd1C&_nc_oc=Adryae_Dal3sFsPI2gR_MQGwp44LYnZbUbEYfgOG55unSCfUjzjXclcrrpQQvdI7eOfrOp69YDHkTESuK_VzEJrS&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=7EyoTl4cr-vAsnCbnoCMjQ&_nc_ss=7b2a8&oh=00_AQMYkyn5BclecSBSdzWe8VAXpaxeAMf_MLD9ZRa0rmkfNg&oe=6ADF9920"
            },
            {
                id: 13,
                name: "Daisy Flowers",
                category: "bouquet",
                categoryLabel: "Bouquet",
                price: "₱59 (per stem) ₱40 (bulk orders)",
                description: "Materials: Cotton Yarn & Flower Wire",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.30808-6/617657348_1527684269357861_2437492417485515074_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1920&ctp=s1080x1920&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHk6xA_GzkTdhqRTd4Tk1x7DBnNXcA1Z7QMGc1dwDVntN3DpG57NRsuSFvYCpw6ElOCln4nhkNNor8oermDB1OZ&_nc_ohc=SmSfL1ZLtOcQ7kNvwEZkI61&_nc_oc=AdpgEIokDNB_Nvzzh0FMFPHf_7vIZrbr5E_ZdPhS-WMtNX6Pckia1TKyWPsDaVqlsZDAcrsSC7QW6dKhCphTb5bZ&_nc_zt=23&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=COku_8gTKu8GdJoyFAZ5WQ&_nc_ss=7b2a8&oh=00_AQOKavs46k9Q3xs6lbofkFD_30MGNYefV1Qbexw9CbLmkw&oe=6ADF9A45"
            },
            {
                id: 14,
                name: "Stand Alone Big Bouquet",
                category: "bouquet",
                categoryLabel: "Bouquet",
                price: "₱1,000 (can customize)",
                description: "Size: aproximately  28-30in | Flowers Quantity: 9 flowers + 6 fillers",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/651042289_1579136990879255_2377852365037600308_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGLaAtF748vsv3dypdCVzinQIRbZkc8f61AhFtmRzx_rUqJV7m-xJnhA3qLYluk6SeO_gfhdahiIsikyIHiPDwZ&_nc_ohc=Vr1vA0rG8xIQ7kNvwFcb2mQ&_nc_oc=Ado4uXM8nevTceC2mTvJFXLr_kk8_GpTmdQhwuFSQA4NS9nJJgdbR1bZMF0Jp8jWc2ZJy_VQfD5r_tLFpNOmU-kZ&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=9PLq_nnZZyGHGIu8Af8HVw&_nc_ss=7b2a8&oh=00_AQNUQhIeaWQWvx0_XySyMURUN4nlpNheaJfXAj4aA5KTCw&oe=6ADFB991"
            },
            {
                id: 15,
                name: "Couquette Heart Keychain",
                category: "keychains",
                categoryLabel: "Keychains",
                price: "₱35 (per piece) ₱20 (bulk orders)",
                description: "Lenght: 13cm | Materials: Milk Cotton Yarn, inside Fibers, Keyrings",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.30808-6/670412248_1607563064703314_2042308340337885108_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEYxDfyKAj5XvVw8xNcJETt_MqpwyfohfL8yqnDJ-iF8psB--d-Da8qGGKCUKle4mVrUzF-1tYCE8j0s-EG7JG5&_nc_ohc=I-fHiN2-cIMQ7kNvwEjCnG4&_nc_oc=AdrCZP38GoKM5KOgyCYROf_Zfn5cEkMzvhkioMMxSTFlXkGBxHvOqeGexg1ReaZaA5FYPLjuzMNYKE0ZIEH9_zTv&_nc_zt=23&_nc_ht=scontent.fcrk3-3.fna&_nc_gid=z8I79DVkzwvWi6wh1FjZCQ&_nc_ss=7b2a8&oh=00_AQOmxTQAIN5UxQ6bdTMk1Fdvhi9-6lJYu-l7JX8UZSo_cw&oe=6ADF88AE"
            },
            {
                id: 16,
                name: "Circular Pearl Bag",
                category: "bags",
                categoryLabel: "Bags",
                price: "₱359 (can customize)",
                description: "Size: | Color: Lavander | Closure: Snaplock | Sling: Chain with Yarn | Materials: Polypropylene Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom orders.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.99422-6/789034073_2891781271163576_6594214648410064482_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGnnw7wAwj8xUj01uh18jOU__XIN0Kp2qP_9cg3Qqnao8AIbc0AmXVJ0li9dD2ebghnT-oM8u87vTKs5xFYk7z_&_nc_ohc=ZIQe7T5ECwMQ7kNvwGH9Mf8&_nc_oc=AdqyzzhNKlA1xLvVxwX49A2klLV0OeJO6pLaj9r330XjaqNsG1H-uiPXmV7wWYJNH1ONbOQ3fPL0O5gy7AYskGBL&_nc_zt=14&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=5Kgduhq7HjcIJ38KVEUQPw&_nc_ss=7b2a8&oh=00_AQPFaCdqOyN1ckbQZ0Vwa41CvlpX9-ghI7ThpjL3ASV7qg&oe=6ADFB626"
            },
            {
                id: 17,
                name: "Sunflower in a Pot",
                category: "desk_figures",
                categoryLabel: "Desk Figures",
                price: "₱69 (per piece) ₱50 (bulk orders)",
                description: "Size: 10cm | Materials: Milk Cotton Yarn, inside Fibers, Stick",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.30808-6/766748152_1720823293377290_8821143316213952086_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s552x414&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGatsT9cbtDA5ZRLzKGJmCpHRC8OdkxBWkdELw52TEFaXHFcA56AhjPqZnPVJX6RdFdijsTUs72WR3Q_0hwLfBa&_nc_ohc=BURZHiGiW8wQ7kNvwGYb7NR&_nc_oc=AdpKmnJEfNj6TH17URNeMFRJDaT34hyaYopQ7tSZ6YwKuFLpOEigR3OYA2AcQ3dl-OYAFXKwYxPes3zhD0KQ5S6B&_nc_zt=23&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=1uBt1fzihxqR7FYZsId3nw&_nc_ss=7b2a8&oh=00_AQPD2mq46_Litr5zQssBxMTOmnaywFZZ4lk7tkqdV2NMxg&oe=6ADFBB9Chttps://scontent.fcrk3-4.fna.fbcdn.net/v/t39.30808-6/766748152_1720823293377290_8821143316213952086_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGatsT9cbtDA5ZRLzKGJmCpHRC8OdkxBWkdELw52TEFaXHFcA56AhjPqZnPVJX6RdFdijsTUs72WR3Q_0hwLfBa&_nc_ohc=BURZHiGiW8wQ7kNvwGYb7NR&_nc_oc=AdpKmnJEfNj6TH17URNeMFRJDaT34hyaYopQ7tSZ6YwKuFLpOEigR3OYA2AcQ3dl-OYAFXKwYxPes3zhD0KQ5S6B&_nc_zt=23&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=jfPKV5sXIM5Dd2W3mrTX9g&_nc_ss=7b2a8&oh=00_AQPa8JmhlRFLDbgbhwm8TkFQWa5zPsNWbxmML3X0IIXDkg&oe=6ADFBB9C"
            },
            {
                id: 18,
                name: "Jellyfish Charm v1",
                category: "keychains",
                categoryLabel: "Keychains",
                price: "₱79 (per piece) ₱55 (bulk orders)",
                description: "Lenght: 18cm | Materials: Cotton Yarn, inside fibers, keyrings",
                options: "Pre-Order. All colors available (2 color combo). Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.30808-6/611156710_1514319544027667_2698317585166430103_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG68DkZnftRu9Wf6ld2u2pXtV3SIOtnxWe1XdIg62fFZ_j18gpVU7thPD2ORh-t8CPwuz-nbygcYoIbOvkclztB&_nc_ohc=0kmQ9-EJKE8Q7kNvwE86pig&_nc_oc=AdpdR0Q051ChefKN2AgrfS2COKQVLGdwvvsLAKEThP3Ua6bazWlBMduw0sJkaCamkxzoWapdDnsgPZCwvJXHYlmN&_nc_zt=23&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=OEXRGQSWSfge37mt5-Xwug&_nc_ss=7b2a8&oh=00_AQOWAP-gH32ks8BTVY4dDrF_fkJrPD95GoUg2P6JJCKmig&oe=6ADF8DBC"
            },
            {
                id: 19,
                name: "Orange Pouch",
                category: "pouch",
                categoryLabel: "Pouch",
                price: "₱65 (per piece) ₱45 (bulk orders)",
                description: "Size: 13cm x 10cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.99422-6/763263256_27710626651956388_3150015094955685341_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE3kbotjyQ6Q--KiLHlAzNr4IKlyMDeGcXggqXIwN4ZxT9oKrHIa5or33ZqVWdloc3RqoGJtz0H-zF7ZRS4rXir&_nc_ohc=d-DagB9pi_cQ7kNvwFUw2gy&_nc_oc=Adq8fMoo_vrjh0bl-SnwcjZ09bpE_hkM4mNRMFb1n86KENMkBVXvRSgQ44Sp4P9gc0Db5gmQ8YS5ZzeD6VJJ3MZU&_nc_zt=14&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=1HC5Maz6rFM0IoNQ50-huw&_nc_ss=7b2a8&oh=00_AQO-1fKRVTrjpyWA5ACTz57aGTg-I9MR71ZwWEdSR7SWkQ&oe=6ADF9702"
            },
            {
                id: 20,
                name: "Regular Rose",
                category: "bouquet",
                categoryLabel: "Bouquet",
                price: "135 (per stem) ₱80 (bulk orders)",
                description: "Materials: Cotton Yarn, Flower Wire/Bamboo Sticks",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/699700797_1637609585031995_9063267593616586854_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGVnbInDyn0sCFxC_U9U0fkS51TbOkadZBLnVNs6Rp1kFCTHB4rJOwcz499rF9QZ6kFDwq1hkyBJcGlKzjCpgnw&_nc_ohc=nG_aVLd9vzkQ7kNvwGTfP5H&_nc_oc=AdqH0UpX18iupWC1GBXQs6Qn8a3xieAR7Pt1YzWDRsSr3u1dVODA87fKlp3RTFIDEzJ4hYZ37OEamtJd3hmoSGTv&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=buF4ybdtg0Hz6xsDFAcVYA&_nc_ss=7b2a8&oh=00_AQO7EHTis6wr7J4OqxDPu53kr2waFJ-OAq-1slaF_pdI3Q&oe=6ADFC297"
            },
            {
                id: 21,
                name: "Orange Mirror Bag Charm",
                category: "bag_charms",
                categoryLabel: "Bag Charm/Keychains",
                price: "₱65 (per stem) ₱50 (bulk orders)",
                description: "Materials: Cotton Yarn | Note: Mirror included and can be use as keychain",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/660474016_1599084675551153_5234141260831481440_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHzgOwLyonWoQH0zX9XLuKALCrrcigofHUsKutyKCh8dX37tiekHJPUGBJM7npwzi2ac5XPPKfduwTiwUPq4tR-&_nc_ohc=IOpo9e3gGAsQ7kNvwGQHykb&_nc_oc=AdrfzHCWHDRl-ahaQCl_wzjhypOmJiaQ5eOH9qNNYdtTmAAcVIEgPGaagecDeJfJFaFuwz9d9p_qpHhZpfFjZYHC&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=reWc8OFeepY6F53REHXIEA&_nc_ss=7b2a8&oh=00_AQOTuXN1blF6vzZEGZYSg1qn6s7pR8qEP7MsPwVc6HEAFQ&oe=6ADF9A36"
            },
            {
                id: 22,
                name: "Calla Lily Big Bouquet",
                category: "bouquet",
                categoryLabel: "Bouquet",
                price: "₱439 (can customize)",
                description: "Size: approximately 25in | Materials: Milk Cotton Yarn | Flower Quantity: 6 flower + 3 fillers",
                options: "Pre-Order. All colors available. Please negotiate with me for custom orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/649552801_1579137064212581_3930818744170365477_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF1CytvPMIZh76fNWWoI3zc0MvnCXcxF5bQy-cJdzEXlq9u4PZeTi6CUkcMYZhFdPvIH-9kkSMp_xmGR7VbSx7m&_nc_ohc=VY8u4Wtf2awQ7kNvwFL-pIL&_nc_oc=AdorfhuV3Z9EpQYRmiiNx8FX4WEQHUllMOaPvf3MGX47434iasZDa52L4W22_UrHNbGgiQnh2wZuIsDNRz3BIdHB&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=9ywJ7MfaBsiyhn_Le0yR9Q&_nc_ss=7b2a8&oh=00_AQN1tnqG2imsGQiRWMZiY0H8BaxFX7uc6l44OH4G_r5oVg&oe=6ADF9A74"
            },
            {
                id: 23,
                name: "Panda Figure/Plushie",
                category: "desk_figures",
                categoryLabel: "Desk Figure/Keychain",
                price: "₱59 (per piece) ₱40 (bulk order)",
                description: "Size: 9cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/764975743_1720823616710591_1268293003662743280_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFTaGG7ptBSLvciZDpBExDGS2u5Fsr7BedLa7kWyvsF5w1PBscE1yqk7s961_wmpc18YHMrCrSrJOz3ccldPvKg&_nc_ohc=uddq2L-thR0Q7kNvwGCzQHZ&_nc_oc=AdoFngSq70avbUhPtZMAfiWgzd_582YOuNm27SGbeOL6pV-cc5grlogcuuM7JdDVn6NkBOzDDGnGQJJ-qAqvjd7n&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=HAlheiVAvSnfC7jBVMi6wA&_nc_ss=7b2a8&oh=00_AQMmSkUAJsY88yaPqdKELDKAsPNFKc5vOBmytxxp0zmE3g&oe=6ADFB40A"
            },
            {
                id: 24,
                name: "Tulip Headband",
                category: "hair_accessories",
                categoryLabel: "Hair Accessories",
                price: "₱89 (per piece) ₱60 (bulk orders)",
                description: "Lenght: 88cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/762796777_2100318037534719_2526846572804800410_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGkaZ2fS11Okp8e5UoHDe1SLVpsOlLyYBUtWmw6UvJgFQMUvvFXAmPqj8mDlfjl3wsnLodzSnk3hwbBHRGZRJmy&_nc_ohc=tkLA9K6RB6UQ7kNvwEmYWeG&_nc_oc=Adr9wKNH42noSEtEhsowkZGui5E6I2ub2RU3t36DVfbakF3NSVyfcMLBG_is0k6j2KOu0ZkIpV6XjyZ1Th-patV5&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=-stQXQ6EcKYyRbyIKf9sLA&_nc_ss=7b2a8&oh=00_AQOI0FvFUP1VaKfDTJSdJ1Vx-tivod6BZquF-ma0R818ow&oe=6ADFBB99"
            },
            {
                id: 25,
                name: "Forget Me Not in a Pot",
                category: "desk_figures",
                categoryLabel: "Desk Figure/Keychain",
                price: "₱69 (per piece) ₱50 (bulk order)",
                description: "Size:  10cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/654734735_1587003593425928_369937190967133190_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFKeJl1fZM6vDL3wOehqGHCRr43Ps65IC9Gvjc-zrkgL4NmCtk8HHGG-6DqwkeE4TVmI5dawEbZAwjSkwAtLLCL&_nc_ohc=jQGJNBL4Mk8Q7kNvwFV2X8S&_nc_oc=AdpdD9ITf6zWPprEsDUGsQiCq_SF8Lqor8hYursk0IVL38psifOKL3GScTzUAXv5vCVWt0kw3bWCzS5D0kXk2Vww&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=QpjOPjcnWYCwhjf0598cIg&_nc_ss=7b2a8&oh=00_AQO84Vn_Yx5p5iYIp0G_BT-uLR5GT6TliQAggV5R0xRdOA&oe=6ADFBEA0"
            },
            {
                id: 26,
                name: "Flower Pouch",
                category: "pouch",
                categoryLabel: "Pouch",
                description: "Size: 11.5cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                options: "Color Combos: Lavender/Cream, Apple Green/Cream, Pink/Cream.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/597654669_1494104089382546_5370075047860037453_n.jpg?stp=dst-jpg_tt6&cstp=mx1120x928&ctp=s1120x928&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEi_TM_oA4XiZCOV9nBAW4ZQC7EpL4xE8BALsSkvjETwHtfdRNpRp098f_WiquZioCARGQJuTcXm9a5ILl9QXTf&_nc_ohc=3NS37dH8kbYQ7kNvwGdPukQ&_nc_oc=Adp5nB81MWJcQGnkfF1LZupdTn6cEX-p0dhwVQP5k_DpqDIPg1wpVmiFFFW2PDqkOT1syibevBi7sx9L7nzzYXk5&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=2RzQCRUYNGeIbcI_iqybgQ&_nc_ss=7b2a8&oh=00_AQNOeSwGxtvuHn0mSfV3f2xof1Gd2UKOtYFBxMrAe5PeJw&oe=6ADFCF85"
            },
            {
            id: 27,
                name: "Sunflower Pouch v1",
                category: "pouch",
                categoryLabel: "Pouch/Wallet",
                price: "₱99 (per piece) ₱65 (bulk orders)",
                description: "Size: 11.5cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/597557508_1496377899155165_5123503682846945363_n.jpg?stp=dst-jpg_tt6&cstp=mx864x1184&ctp=s864x1184&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF781wyCsqIIJA9hfZoqkyjUk_JcpBAR5RST8lykEBHlFWEW-i4glsaaA393wedUS-DKcMvB2daRh4CoHrfq4QM&_nc_ohc=FqEHcZVq_fAQ7kNvwGQIWsM&_nc_oc=AdrFgRh-s-XtMxBEYTNK4MneW61VcaARJcq1XNw_Gfz337lJL36qvUtnOg51-CjyBqy5cMI1G97G9u_m_eeaJqrk&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=GoDX9KSS2FQVSBaiEbinFQ&_nc_ss=7b2a8&oh=00_AQNLnNA5fswfPK7yPTtKHbo7fkpDx8B2FObLHDo03ncSIw&oe=6ADFB3A6"
            },
            {
            id: 28,
                name: "Ghibli Soot Sprite Pouch",
                category: "pouch",
                categoryLabel: "Pouch/Wallet",
                price: "₱65 (per piece) ₱45 (bulk orders)",
                description: "Size: 13cm x 10cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/605543669_1513098804149741_2087097918699293561_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEs09wQmYsTPW9LM4Uj6wNTMLjVuYKX720wuNW5gpfvba_pk5yThI8CPajIsjJqg-xbHXZBS6FcGbjMmqJGINVR&_nc_ohc=dqQ3_lqsdhwQ7kNvwH9yCPz&_nc_oc=AdpF3VKB1QYICRsPIYnjzA2Wgk2skAc5UG1nvg5Cji3UUChI-YPdYEc5YB9h2mTdDoSNaDdYdRJQiso05CE44dOe&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=uKNwD8PPN8rq4Xc16v3dfw&_nc_ss=7b2a8&oh=00_AQMGnH0UHRhFq_gLj1zyX-pTT7n0IWgmh3jOlzyp2V4PjA&oe=6ADFB24D"
            },
            {
            id: 29,
                name: "Sunflower Keychain",
                category: "keychains",
                categoryLabel: "Keychains",
                price: "₱30 (per piece) ₱20 (bulk orders)",
                description: "Lenght: 10cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.99422-6/741366217_2123139668414312_5475383448603246927_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG_hPM5FKtXVa1VwV83uGNTYe9YICg-pRlh71ggKD6lGanz5wLkhsStemkcAZDkGwHg2wlbWdCnQEbUClXz3Q8h&_nc_ohc=-0Cc51qDzmsQ7kNvwH0hQFT&_nc_oc=AdphqlkpYVJXF-fVx0aWiYjSNNeYYKetTd381w5ngYPwhsURfGAb-C3vusmTbOAcDiZOOaERtvzfFT04PIRAYUas&_nc_zt=14&_nc_ht=scontent.fcrk3-3.fna&_nc_gid=00SX9TAKBHRhbNwsphTD3w&_nc_ss=7b2a8&oh=00_AQMAlPEzLJ6CgoAGYkc9EpgbSg6p-foAR5iiWhd7hj3UKA&oe=6ADFC784"
            },
            {
            id: 30,
                name: "Bookmarks",
                category: "journal",
                categoryLabel: "Journal Things",
                price: "₱45 (per piece) ₱30 (bulk orders)",
                description: "Lenght: 30cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/825352820_1725930925166171_9179484615065442326_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHn8fC4SeZR9SBNOnQhFbdIRLoj6h4sW4xEuiPqHixbjCd17t6ZMuCQXY5qiiwzqpCBrJJinmX5e8QX188kvqJb&_nc_ohc=bOGt33c84RYQ7kNvwE5L0dH&_nc_oc=AdoGtTGxtbKmU_bSLUE02zPc04NZaXVn8yeI05w-OjSSFNpe5kJ43XTK2K-fv9I-Puc8JOyOewgXcB7yNYAw_xHm&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=3BBiiUcyAn5tij1WGyuJ_g&_nc_ss=7b2a8&oh=00_AQPqts-8vCAdMDI-YZ5BjmEEQBg9w6gA_VbO5Cj8JdpFEg&oe=6ADFD486"
            },
            {
                id: 31,
                name: "Ribbon Couquette Keychain",
                category: "keychain",
                categoryLabel: "Keychains",
                price: "₱25 (per piece) ₱15 (bulk orders)",
                description: "Lenght: 8cm  | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/605509350_1511368687656086_894565315780611873_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEldhEIu9dNbMyD9leyxkNtvtyR6bUpswq-3JHptSmzCmovKSjibnXDQ13uFrHYJ5MUu4omtXJUCs7aUi3VQF4J&_nc_ohc=XIUwUwCO3lQQ7kNvwEIp7Z1&_nc_oc=AdpIbfvPD_4EZcxXW4ljiI2Gmi0H0IU3ZcyXNM-LQiPrWe1pLH6IQ9XCaf-ygopIp270fSO79rtT5l8_LsGIKyGQ&_nc_zt=23&_nc_ht=scontent.fcrk3-1.fna&_nc_gid=ZoECTPIEv68DI1ZWr22gzg&_nc_ss=7b2a8&oh=00_AQPtOdTKky5Jx9PbcrvuoAui43LDla7XcgR_3iDE1bfKUA&oe=6ADFB336"
            },
            {
                id: 32,
                name: "Card Holder with Couquette Keychain",
                category: "pouch",
                categoryLabel: "Pouch/Wallet",
                price: "₱65 (per piece) ₱45 (bulk orders)",
                description: "Color: shiny brown | Size: 3.5in x 4in | Closure: Snaplock | Materials: Soft Nylon Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.99422-6/761640938_1633716125420618_7363639592340746402_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s552x414&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGqhvgur4xdhGEJVrMYXR4nXlSP9LGVghxeVI_0sZWCHFErNM5OhmBSfwvLLr54RbSQ5YvnJGp6RP_nHJtjoVPD&_nc_ohc=oBXDgwXZkTQQ7kNvwEAXKJ_&_nc_oc=AdrPTVEl2SG0I9pAns4POiHidbTDJhC5JN3opK7jBRVD0zDBL42JmRF_WV_JpsPG3iGWIbAKb9kGc7ok5ESETsfT&_nc_zt=14&_nc_ht=scontent.fcrk3-3.fna&_nc_gid=QSlmzqViVRXHov_9yeS_rQ&_nc_ss=7b2a8&oh=00_AQO0HFN7v6NyvSB42xTfribZ7pdatJ20vSl1xKkG4RyhmQ&oe=6ADFCF11"
            },
            {
                id: 33,
                name: "Purple Flower Hairclip",
                category: "hair_accessories",
                categoryLabel: "Hairclips",
                price: "₱30 (per piece) ₱20 (bulk orders)",
                description: "Lenght: 8cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.99422-6/761627776_1023674413773037_5332288459523524541_n.png?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFt3J9VOmbgJltkxl85tZ14hVPo1VRFIrOFU-jVVEUisxUOIxVkRJFs3-fNaAzjqE6XzHY4TIRKISMtjMC0RA59&_nc_ohc=bFhpmgwB5pYQ7kNvwEp_sTI&_nc_oc=Adp9c2wzfIhWc84oRdVLdm8-NtQZnIV5PwdbKmK3I4xGE93436Fvc_DWfTgP0wxy8lNa44HfVQUmdWtdaWUrNhz6&_nc_zt=14&_nc_ht=scontent.fcrk3-2.fna&_nc_gid=luqKMmGTB2SCqU_6V2PPsw&_nc_ss=7b2a8&oh=00_AQM03SRO4Sv0ZIKCbduAEYQQe7QHJANZzZ7buJ7OFgcL4Q&oe=6ADFEB33"
            },
            {
                id: 34,
                name: "Baby Mushrooms v1",
                category: "keychains",
                categoryLabel: "Keychains",
                price: "₱50 (per piece) ₱30 (bulk orders)",
                description: "Lenght: 5.5cm | Materials: Milk Cotton Yarn",
                options: "Pre-Order. All colors available. Please negotiate with me for custom and bulk orders.",
                image: "https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.99422-6/849130336_1897283884578535_1548525001644063348_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsu3QZIfADebMFzdfrnUvsjqGmL9HZXrWOoaYv0dletQCmH2mA1oHVKNZqwy0YM49isurjacBwoQa5nne2GFzL&_nc_ohc=YlVTMRwepqAQ7kNvwG8BTXn&_nc_oc=AdpOO0H-HlTUbynq20jV8FgE8m72ZUDpWEZPJJkRLN-Aih6UeAcepqMqilUfHa6CBnsbXdZdM_t15mxChFXSnu2U&_nc_zt=14&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=Uz_GeLS9chAnO2m6Z9iH-g&_nc_ss=7b2a8&oh=00_AQNgdYroKv-BflpkpTtrSMRabNoBpgsv3gTzkkZo2FtOBA&oe=6ADFE194"
            },
            {
                id: 35,
                name: "Mirror Bag Charm",
                category: "bag_charms",
                categoryLabel: "Bag Charms/Keychains",
                price: "₱135 (per piece) ₱80 (bulk orders)",
                description: "Materials: Cotton Yarn | Note: Mirror included and can be use as keychain",
                options: "Pre-Order. All colors available. Please negotiate with me for custom & bulk orders.",
                image: "https://scontent.fcrk3-4.fna.fbcdn.net/v/t39.30808-6/658368731_1599085045551116_3909997798100011941_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHK3nJUEHRirE3QzZlKIRqwl95edwIMdUyX3l53Agx1TLDhdjNkeljzDrYnut9eWUH1aJwK9gK-DM7fUQQ9kBJf&_nc_ohc=wnp1Ns890x0Q7kNvwHP6ovJ&_nc_oc=Adpuw7hQl1UwtDW3dMw1JlAzoH07azYPHDCPPW5yHK0qhtaeIwLoBzNNiWu4TTGeNBhjeI60kZztg7CembnMqsf-&_nc_zt=23&_nc_ht=scontent.fcrk3-4.fna&_nc_gid=Y9A2McjvCx2nrxBM6TX2GQ&_nc_ss=7b2a8&oh=00_AQPc-6Un-8Mz5Qk-7CCi5suc9jLPbTXp8AalTdCiGtl9zQ&oe=6ADFC5C5"
            },
        ];

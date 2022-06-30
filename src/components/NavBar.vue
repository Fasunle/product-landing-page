<template>
    <header>
        <nav class="container flex place-content-between py-5 nav">
            <div class="flex place-content-center">
                <div class="flex justify-center items-center md:hidden">
                    <img class="h-6 w-6" src="../assets/icon-menu.svg" alt="Menu Icon">
                </div>
                <a href="/" class="ml-8 mr-4">
                    <h1 class="brand">Sneakers</h1>
                </a>
                <ul class="flex md:hidden place-items-center nav-items">
                    <li class="mr-4"><a href="#">Collections</a> </li>
                    <li class="mr-4"><a href="#">Men</a></li>
                    <li class="mr-4"><a href="#">Women</a></li>
                    <li class="mr-4"><a href="#">About</a></li>
                    <li class=""><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="flex imageContainer">
                <div class="mr-4 flex justify-center items-center">
                    <img  src="../assets/cart.png" alt="Cart Icon">
                </div>
                <div class="mx-4">
                    <img src="../assets/image-avatar.png" alt="User Avatar">
                </div>
            </div>

        </nav>
    </header>
</template>

<script></script>

<style scoped>



    a{
        cursor: pointer;
    }
    .brand{
        font-size: 1.85rem;
        font-weight: 700;
    }

    /* Bottom Line */
    .nav{
        position: relative;
    }

    .nav::after{
        position: absolute;
        content: "";
        left: 0;
        width: 100%;
        border-bottom: 1px solid hsl(219 9% 45% / .75);
        bottom: 0;
    }

    .nav-items a{
        position: relative;
    }

    .nav-items a::after{
        border-bottom: 5px solid hsl(26 100% 55% / 0);
        bottom: -130%;
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        transition: border-color 300ms ease-in-out;
    }

    .nav-items a:hover::after{
        border-bottom-color: hsl(26 100% 55% / 1);
    }
    
    .imageContainer > div{
        width: 50px;
    }

    .imageContainer img{
        display: block;
        width: 100%;
        border-radius: 50%;
        aspect-ratio: 1;
        padding: .3em;
        object-fit: cover;
        border: 2px solid hsl(26 100% 55% / 0);
    }

    .imageContainer img:hover{
        
        border-color: hsl(26 100% 55% / 1);
    }

    @media (max-width: 400px){
        .nav-items{
            display: none;
        }

        .container{
            padding-inline: 1em;
        }
    }

    @media (min-width: 401px){
        .nav-items{
            display: flex;
        }

    }

</style>
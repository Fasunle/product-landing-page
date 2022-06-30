<template>
    <header>
        <nav class="flex place-content-between py-5 nav">
            <div class="flex">
                <a href="/" class="ml-8 mr-4">
                    <h1 class="brand">Sneakers</h1>
                </a>
                <ul class="flex place-items-center nav-items">
                    <li class="mr-4"><a href="#">Collections</a> </li>
                    <li class="mr-4"><a href="#">Men</a></li>
                    <li class="mr-4"><a href="#">Women</a></li>
                    <li class="mr-4"><a href="#">About</a></li>
                    <li class=""><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="flex imageContainer">
                <div class="mr-4">
                    <img src="../assets/cart.png" alt="Cart Icon">
                </div>
                <div class="">
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
        padding: .2em;
        object-fit: cover;
        border: 2px solid hsl(26 100% 55% / 0);
    }

    .imageContainer img:hover{
        
        border-color: hsl(26 100% 55% / 1);
    }

</style>
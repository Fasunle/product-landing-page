<template>
    <header>
        <nav class="flex place-content-between pt-5 pb-3 md:py-5 nav">
            <div class="flex place-content-center">
                <div class="flex justify-center items-center md:hidden w-10 px-2">
                    <img class="h-5 w-full" src="../assets/icon-menu.svg" alt="Menu Icon">
                </div>

                <span class="font-semibold md:text-3xl sm:text-lg mr-8 inline-block place-content-center my-auto">
                    <a href="/">Sneakers</a>
                </span>

                <ul class="flex sx:hidden mx-5 place-items-center nav-items">
                    <li class="mr-4"><a href="#">Collections</a> </li>
                    <li class="mr-4"><a href="#">Men</a></li>
                    <li class="mr-4"><a href="#">Women</a></li>
                    <li class="mr-4"><a href="#">About</a></li>
                    <li class=""><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="flex user-info">
                <div class="sm:mr-2 md:mr-4 w-14">
                    <img class="aspect-1" src="../assets/cart.png" alt="Cart Icon">
                </div>
                <div class="w-14">
                    <img class="aspect-1" src="../assets/image-avatar.png" alt="User Avatar">
                </div>
            </div>

        </nav>
        <div class="h-0.5 w-full bg-gray-300"></div>
    </header>
</template>

<script></script>

<style scoped>

    a{
        cursor: pointer;
    }
    
    .line{
        height: 20px;
        width: 100%;
        background-color: green;
    }


    .nav-items a{
        position: relative;
    }

    .nav-items a::after{
        border-bottom: 5px solid hsl(26 100% 55% / 0);
        bottom: -140%;
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        transition: border-color 300ms ease-in-out;
    }

    .nav-items a:hover::after{
        border-bottom-color: hsl(26 100% 55% / 1);
    }
    
    .user-info img{
        display: block;
        width: 100%;
        border-radius: 50%;
        aspect-ratio: 1;
        padding: .3em;
        object-fit: cover;
        border: 2px solid hsl(26 100% 55% / 0);
    }

    .user-info img:hover{
        
        border-color: hsl(26 100% 55% / 1);
    }

    @media (max-width: 400px){
        .nav-items{
            display: none;
        }

    }

    @media (max-width: 772px){
        .nav-items{
            display: none;
        }

    }

</style>
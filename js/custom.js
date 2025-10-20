// to get current year
 function getYear() {
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            document.querySelector("#displayYear").innerHTML = currentYear;
        }

        // Ensure the DOM is fully loaded before running the function
        document.addEventListener("DOMContentLoaded", function() {
            getYear();
        });


// isotope js
$(window).on('load', function () {
    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    });

    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        });
    });
});
$(document).ready(function () {
var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    });

  document.getElementById('showAll').addEventListener('click', (e) => {
    e.target.style.display = 'none';
    var data_value = document.querySelector('.filters_menu li[data-filter="*"]').getAttribute('data-filter');

    $grid.isotope({
      filter: data_value
    });

    document.querySelectorAll('.filters_menu li').forEach(li => li.classList.remove('active'));
    document.querySelector('.filters_menu li[data-filter="*"]').classList.add('active');
    
  });
});

/** send order on whatsApp **/

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const order = document.getElementById('order').value.trim();
  const chose = document.getElementById('chose').value;
  const mapField = document.getElementById('map').value;
  const date = new Date().toLocaleDateString('en-GB');
  const message = `🔔 *New Booking Request* 🔔\n` +
    `*Name:* ${name}\n` +
    `*Phone Number:* ${phone}\n` +
    `*Order:* ${order}\n` +
    `*Date:* ${date}\n` +`*Type:* ${chose}\n` + `*Location:* ${mapField}\n` +
    `------------------------\n` +
    `📞 Please respond to this request as soon as possible.`;

  const whatsappNumber = '601139039304'; // without '+' sign
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
});

// nice selectz
$(document).ready(function() {
    $('select').niceSelect();
  });

const chose = document.getElementById('chose');
const mapField = document.querySelector('.map');

chose.onchange = () => {
  mapField.style.display = chose.value === 'delivery' ? 'block' : 'none';
};

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


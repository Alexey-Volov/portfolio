$(document).ready(function(){
    $('.contact-form').validate({
		rules: {
			Email: {
				required: true,
				email: true
			},
			subject: {
				required: true
			},
			message: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Введите email',
				email: 'отсутствует символ @'
			},
			subject: {
				required: 'Введите тему сообщения'
			},
			message: {
				required: 'Введите текст сообщения'
			}
		},
        submitHandler: function (form) {
			ajaxFormSubmit();
        }
	})
	const formItems = document.querySelectorAll('.form-field');

    for(let item of formItems) {
    const thisParent = item.closest('.form-item');
    const thisPlaceholder = thisParent.querySelector('.fake-placeholder');
    
    item.addEventListener('focus', function(){
        thisPlaceholder.classList.add('active');
    });

    item.addEventListener('blur', function(){
        if(item.value.length > 0){
            thisPlaceholder.classList.add('active');
        }
        else {
            thisPlaceholder.classList.remove('active')
        }
    })
}

	function ajaxFormSubmit() {

		let string = $(".contact-form").serialize();

		
		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: string,

			
			success: function (html) {
				$(".contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});
		return false;
	}
	document.querySelector('.nav-icon').addEventListener('click', function () {
		this.classList.toggle('nav-icon--active');
	})
	
	const nav = document.querySelector('.navigation');
	const over = document.querySelector('#body')
	document.querySelector('.nav-icon').addEventListener('click', function () {
		nav.classList.toggle('nav--active');
		over.classList.toggle('overflow');
	});

	const navLinks = document.querySelectorAll('.navigation a');
	const navIcon = document.querySelector('.nav-icon');
	
	
	navLinks.forEach(function (item) {
		
		item.addEventListener('click', function () {
			navIcon.classList.remove('nav-icon--active'); 
			nav.classList.remove('nav--active'); 
			overlayDiv.classList.toggle("active");
			over.classList.toggle("overflow");
		});
	});
	const overlayDiv = document.querySelector("#overlay");
	const btnShowMenu = document.querySelector(".nav-icon");
	btnShowMenu.addEventListener("click", function() {
		overlayDiv.classList.toggle("active");
	});
	let containerEl = document.querySelector('#portfolio-projects');
	let mixer = mixitup(containerEl, {
		classNames: {
			block: ""
		}
	});

	$('#page-nav').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshld: 0.5,
		filter: '',
		easing: 'swing',
		begin: function () {},
		end: function () {},
		scrollChange: function ($currentListItem) {}
	});

	function calcScrollProgress() {
		let scrollScale = document.querySelector('.progressbar-scale');
		let scrollTop = window.scrollY; 
		let docHeight = document.body.offsetHeight;
		let winHeight = window.innerHeight;
		let scrollPercent = scrollTop / (docHeight - winHeight); 
		let scrollPercentRounded = Math.round(scrollPercent * 100); 
	
		scrollScale.style.width = scrollPercentRounded + '%';
	}

	function displayMonth() {
        var now, year;
        now = new Date();
        year = now.getFullYear();

        document.querySelector("#year").innerText = year;
		
    }
	displayMonth()
	document.addEventListener('scroll', calcScrollProgress); 
	window.addEventListener('resize', calcScrollProgress); 
})

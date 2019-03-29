(function($) {
    $(document).ready(function() {
        $(".phone-mask").mask("+998 (bb) bbb-bb-bb", { placeholder: "+998 (__) ___-__-__" });

        $(".date-picker" ).datepicker();

        $.datepicker.regional['ru'] = { 
            closeText: 'Закрыть', 
            prevText: '&#x3c;Пред', 
            nextText: 'След&#x3e;', 
            currentText: 'Сегодня', 
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
            'Июл','Авг','Сен','Окт','Ноя','Дек'], 
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], 
            dateFormat: 'dd.mm.yy', 
            firstDay: 1, 
            isRTL: false 
            }; 
        $.datepicker.setDefaults($.datepicker.regional['ru']); 

        $('.time-picker').clockpicker({
            placement: 'bottom',
            align: 'right',
            donetext: 'Готово'
        });
        
        $('.owl-carousel').owlCarousel({
            navigation: true,
            pagination: false,
            stopOnHover: true,
            scrollPerPage: true,
            navigationText: ["",""],
            itemsCustom: [
                [0, 1],
                [768, 3]
            ]

        })

        $('.review-btn').on('click', function(e){
            e.preventDefault();
            // $.magnificPopup.close();
            setTimeout(function(){
                $.magnificPopup.open({
                    items: {
                        src: '<div class="white-popup-block padding-block"><h2 style="margin:0;text-align:center;">Отзыв успешно отправлен!</h2></div>',
                        type: 'inline'
                    }
                });
            }, 500);
        })


        $('.popup-with-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',
            mainClass: 'mfp-fade',
            removalDelay: 300,
            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function() {
                    if($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });

        $('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            gallery: {
                tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }
            
        });

        var overlay = $('.overlay'),
            body = $('body');

        $('.toggle-btn').each(function() {
            var self = $(this),
                target = $(self.data('target'));
            self.click(function(e) {
                if (self.hasClass('active')){
                    self.removeClass('active');
                    target.removeClass('open');
                    overlay.removeClass('open');
                    setTimeout(function(){
                        body.removeClass('overflow');
                    }, 500)
                } else {
                    self.addClass('active');
                    target.addClass('open');
                    overlay.addClass('open');
                    body.addClass('overflow');
                }
            })
            overlay.click(function(){
                self.removeClass('active');
                target.removeClass('open');
                setTimeout(function(){
                    body.removeClass('overflow');
                }, 500)
            })
        })

        overlay.click(function(){
            $(this).removeClass('open');
        })

        $('.scroll-btn').each(function(){
            var self = $(this),
                target = $(self.attr('href')).offset().top - 60;
            self.click(function(e){
                e.preventDefault();
                $('html, body').animate({
                    'scrollTop' : target
                }, 800);
            })
        })

        $('.my-tab').each(function() {
            var t = $(this),
                m = t.find('.tab-menu').find('.tab-btn'),
                w = t.find('.tab-wrap').find('.tab'),
                w2 = t.find('.tab-wrap-2').find('.tab'),
                a = t.data('autoplay'),
                l = w.length,
                c = 1,
                h = t.data('stop-hover'),
                f = function(){
                        c = c >= l?0:c;
                        w.removeClass('active')
                        .eq(c).addClass('active');
                        w2.removeClass('active')
                        .eq(c).addClass('active');
                        m.removeClass('active')
                        .eq(c).addClass('active');
                        c++;
                }
                m.first().addClass('active');
                w.first().addClass('active');
                w2.first().addClass('active');
            if (a !== undefined) {
                var si = setInterval(f, a);
                if (h !== undefined) {
                        t.mouseover(function(){
                                clearInterval(si);
                        })
                        t.mouseleave(function(){
                                si = setInterval(f, a);
                        })
                }
            }
            m.click(function(event){
                event.preventDefault();
                var index = $(this).index();
                c = index+1;
                w.removeClass('active')
                .eq(index).addClass('active');
                w2.removeClass('active')
                .eq(index).addClass('active');
                m.removeClass('active')
                .eq(index).addClass('active');

            })

        })
      
    })
})(jQuery)

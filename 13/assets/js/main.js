var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {
          lat: 48.91941286309861,
          lng: 24.7110427174105,
      },
      zoom: 15,
      styles: [
        {
            elementType: 'geometry',
            stylers: [
              {
                color: '#1d2c4d'
              }
            ]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#8ec3b9'
              }
            ]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#1a3646'
              }
            ]
          },
          {
            featureType: 'administrative.country',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#4b6878'
              }
            ]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#64779e'
              }
            ]
          },
          {
            featureType: 'administrative.province',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#4b6878'
              }
            ]
          },
          {
            featureType: 'landscape.man_made',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#334e87'
              }
            ]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [
              {
                color: '#023e58'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#283d6a'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#6f9ba5'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#1d2c4d'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#023e58'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#3C7680'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#304a7d'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#98a5be'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#1d2c4d'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#2c6675'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#255763'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#b0d5ce'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#023e58'
              }
            ]
          },
          {
            featureType: 'transit',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#98a5be'
              }
            ]
          },
          {
            featureType: 'transit',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#1d2c4d'
              }
            ]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#283d6a'
              }
            ]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
              {
                color: '#3a4762'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#0e1626'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#4e6d70'
              }
            ]
          }
      ],
  })
  const menu = $("#menu")
  function addPoint(name, latitude, longitude, image, text) {

    let infowindow = new google.maps.InfoWindow({
      content: `<div class="information">
      <img class="information__image" src="${image}">
      <p class="information__text">${text}</p>
      </div>`,
    });
    console.log(infowindow);

    const marker = new google.maps.Marker({
      position: {
        lat: latitude,
        lng: longitude,
      },
      map,
      title: `${name}`,
    });

    marker.addListener('click', () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    })

    const markerBlock = $(`<div>${name}</div>`)
    markerBlock.on('click', () => {
      console.log('ON CLICK')
      const coords = marker.getPosition()
      console.log('coords', coords)
      map.setCenter(coords, coords)
    })
    menu.append(markerBlock)
  };

  addPoint('Ратуша',48.92284165701992, 24.710382856098214,"https://lh5.googleusercontent.com/p/AF1QipPVv8BIIpqK9v9td-9I2VEFH9Ngm21HA9uhgejz=w408-h272-k-no","Ратуша в стилі ар-деко з краєзнавчим музеєм та восьмикутною вежею, з якої відкриваються краєвиди на місто.")

  addPoint('Медичний університет',48.921680780778786, 24.708862623816312,"https://lh5.googleusercontent.com/p/AF1QipPquMgZdjQbAYpx-V2Q_ybP95t7dMaeMV107woO=w408-h271-k-no","Належить до 200 найкращих вищих навчальних закладів України.")

  addPoint('Кафедральный собор Святого Воскресіння',48.92228944264446, 24.70887597090501,"https://lh5.googleusercontent.com/p/AF1QipOInVBrLTU_bh-VdgaEsAe80oq8MoOvQ9NZvMQf=w408-h612-k-no"," Катедральний храм Івано-Франківської архієпархії Української греко-католицької церкви.")

  addPoint('Колегіальний костел Пресвятої Діви Марії',48.92393676279512, 24.709427930533028,"https://lh5.googleusercontent.com/p/AF1QipOCKaK06L2khYDHw8Sfnf02d5auCLFg0b2mvSqe=w408-h272-k-no",'Найдавніша споруда міста Івано-Франківська')

  addPoint('Памятник Адаму Міцкевичу',48.921369462453775, 24.711817992794387,"https://lh5.googleusercontent.com/p/AF1QipNFnMwk3xGuIaqN0HihaQ5c0y0urru5fXGt7Tp5=w408-h544-k-no",' Памятник польському поетові Адамові Міцкевичу в обласному центрі місті Івано-Франківську; вважається найстарішим за часом спорудження зразком міської скульптури в місті.')

  addPoint('Фонтан на Вічевому Майдані',48.920413807626026, 24.70819689994326,"https://lh5.googleusercontent.com/p/AF1QipNWZAWBPmkoUEhCcQ-gC-nhjpQ1xs_e9z6KItpA=w408-h306-k-no","Третій - сучасний варіант фонтану був спроектований під керівництвом головного міського архітектора Ореста Коса. Його відкриття відбулося 21 серпня 2004 року і був приурочений до Дня незалежності України. Спорудження являє собою круглий басейн з чашею, під яку можна встати і милуватися водоспадом перед собою. У нічний час доби фонтан переливається різними кольорами і «танцює» під музичні композиції. Пульсуючі під музику каскади зробили Вічову площа улюбленим місцем зустрічей і прогулянок івано-франківців.")

  addPoint('Парк імені Т.Г.Шевченка',48.910892785328976, 24.695936633430488,"https://lh5.googleusercontent.com/p/AF1QipP_nSTwiq0mrsT9JxQRdIVcI--zpRf2zo09oE-0=w408-h272-k-no","З 1972 року парк є парком-пам'яткою садово-паркового мистецтва (також має статус — дендрологічний парк).")

  addPoint('Памятник Івану Франку',48.91824696422344, 24.717958545971655,"https://lh5.googleusercontent.com/p/AF1QipP7-4sYsQFsRVNzYBbFC84Y5CHW1zIar1xWGfp2=w408-h408-k-no","Івано-Франківський пам'ятник Іванові Франку встановлений у середмісті по вулиці Незалежності біля будівлі Івано-Франківського академічного обласного музично-драматичного театру, що також носить ім'я Каменяра[2]. Площа, на якій встановлено пам'ятник, названа іменем Івана Франка.")

  addPoint('Івано-Франківський національний академічний драматичний театр імені Івана Франка (Франківський драмтеатр) ',48.91765797118294, 24.718869569890312,"https://lh5.googleusercontent.com/p/AF1QipN4HrWwYSSIQlHgUhlsIT6RlCTs2Xz6FpsVTcoI=w408-h271-k-no","Перший на Прикарпатті професійний український театр (заснований у грудні 1939 р.). 29 серпня 2008 року театру присвоєно звання «академічний». 18 лютого 2019 року указом Президента України театру надано статус національного.")

  addPoint('Вовчинецькі гори',48.95941326280053, 24.754106336393114,"https://lh5.googleusercontent.com/p/AF1QipOoyZ04Aasl1GZAJudvnzK_95sEyoAYa4aAS9LD=w408-h272-k-no","Частина Покутської височини, що сягає 300—350 м над р. м, з похилими схилами та плоскою поверхнею. Комплексна пам'ятка природи місцевого значення «Вовчинецькі гори». являють собою систему горбів з цікавими відслоненнями, вкритими розмаїтою лучно-степовою рослинністю.")

  addPoint('Памятник Степану Бандері',48.90600031244815, 24.714235511600535,"https://lh5.googleusercontent.com/p/AF1QipNFyAchrIeaOnGy-wrsvdAF6lF3lLX9023OVmr4=w408-h272-k-no","Пам'ятник Степанові Бандері в Івано-Франківську було урочисто відкрито 1 січня 2009 року. Його автор — львівський художник Микола Посікіра.")

  addPoint('Памятник Опанасу Заливасі',48.91965219259122, 24.711380557538295,"https://lh5.googleusercontent.com/p/AF1QipNMa1Xbvtth3KzkHOmmVlLjr1Bq7sQIihWfdtHH=w408-h544-k-no","Пам'ятник відкрили на «стометрівці» – пішохідній вулиці Незалежності в центрі Івано-Франківська в 2017 році.")

  addPoint('Стометрівка',48.919546612298504, 24.712261784360628,"https://lh5.googleusercontent.com/p/AF1QipM9i8xWl86fpaH0pgbKqaMNxJbFbtb8IZPo23T1=w408-h306-k-no","Стометрівкою називають пішохідну частину вулиці Незалежності – від Вічевого майдану до вулиці І. Франка. Насправді її довжина сягає 450 м. Простягається вона від Вічевої площі і продовжується до вулиці Івана Франка. З’явилася «Стометрівка» ще за часів Радянського Союзу, а архітектори, що її створювали, отримали численні державні нагороди. Саме тут знаходяться найкращі готелі, магазини, книгарні, затишні ресторани та кафе.")

  addPoint('Кінотеатр "Космос"',48.91866123131338, 24.722172932516695,"https://lh5.googleusercontent.com/p/AF1QipPXFHKKhbH81xUm60XGupNyGd41yxb42bAMYoJW=w408-h272-k-no","Перший кінотеатр в Івано-Франківську.")

  addPoint('Кінотеатр "Люмьєр"',48.92056797766942, 24.710535496116428,"https://lh5.googleusercontent.com/p/AF1QipM2n_RiP3TZcUXCJU0cWaQoVdLG6LQcWNaeYM47=w408-h273-k-no","Відпочинковий комплекс в Івано-Франківську відкритий в червні 2006 року. Названий на честь родоначальників кінематографу, братів Люм’єр, що в перекладі з їх рідної французької значить світло.")

  addPoint('Острів кохання на міському озері',48.913243804336155, 24.686778723355445,"https://lh5.googleusercontent.com/p/AF1QipMzdJ5f_ljXc7bJbZImz69cjoEhCv1xeTdcMxOt=w408-h272-k-no","Острів Кохання має форму видовженого серця.Острів Кохання та міст, який до нього веде, є родзинками Івано-Франківська. Планується, що це місце буде творчим острівцем, де культурні заходи проводитимуть і надалі.")
}
let currentPhoto = 0;
let imagesData = [
    {
        photo: 'img/1.JPG',
        title: 'La Manche',
        description: 'I took this picture very early in the morning on a ferry to the United Kingdom. You can almost feel the cold, fresh, salty air.'
    },
    {
        photo: 'img/2.JPG',
        title: 'Beach in Brighton',
        description: 'I love beaches. This misty beach with colorful pebbles and cold sea had a special charm.'
    },
    {
        photo: 'img/3.JPG',
        title: 'Crab Leg',
        description: 'I found this crab leg on a beach in Brighton. I thought it was kinda cool.'
    },
    {
        photo: 'img/4.JPG',
        title: 'Seagull',
        description: 'These fellows were everywhere in Brighton. They were very rude and malicious, but still cute.'
    },
    {
        photo: 'img/5.JPG',
        title: 'Lighthouse',
        description: 'I love lighthouses. This one looks tiny, but it was just the shore being super high. I wonder if somebody lives there.'
    },
    {
        photo: 'img/6.JPG',
        title: 'The Home of Charles Dickens',
        description: 'I visited the house where Charles Dickens lived and wrote his significant works.'
    },
    {
        photo: "img/7.JPG",
        title: "London",
        description: "How can you even visit Britain without visiting London? Stunning architecture, of course, but I like the small towns better."
    },
    {
        photo: "img/8.JPG",
        title: "Westminster Abbey",
        description: "I really admire all the details and decorations on huge buildings like this."
    },
    {
        photo: "img/9.JPG",
        title: "Buckingham Palace",
        description: "Of course I had to visit the Buckingham palace. Too crowded for me, honestly. I would prefer the cosy, empty shores any day."
    }
];

$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photoTitle').text(imagesData[currentPhoto].title);
$('#photoStory').text(imagesData[currentPhoto].description);

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photoTitle').text(imagesData[photoNumber].title);
    $('#photoStory').text(imagesData[photoNumber].description);

    $('.thumbnail').removeClass('active');
    $('.thumbnail[data-index="' + photoNumber + '"]').addClass('active');
};

loadPhoto(currentPhoto);

$('#left-arrow').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {
        currentPhoto = imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
});

$('#right-arrow').click(() => {
    currentPhoto++;
    if (currentPhoto >= imagesData.length) {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

$('.thumbnail').click(function() {
    const index = $(this).data('index');
    loadPhoto(index);

    $('.thumbnail').removeClass('active');
    $(this).addClass('active');
});

$('.thumbnail').hover(
    function() {
        $(this).find('.thumbnail-title').css('opacity', '1');
    },
    function() {
        $(this).find('.thumbnail-title').css('opacity', '0');
    }
);

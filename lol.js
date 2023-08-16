$("#container").css('background-color', 'lime');

let currentPhoto = 0;
let imagesData = [
    // Your images data here...
];

$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photoTitle').text(imagesData[currentPhoto].title);
$('#photoStory').text(imagesData[currentPhoto].description);

let thumbnailsContainer = $('.thumbnails-container');

imagesData.forEach((image, index) => {
    let thumbnail = $('<div>')
        .addClass('thumbnail')
        .attr('data-index', index)
        .appendTo(thumbnailsContainer);

    const thumbnailImage = $('<img>')
        .attr('src', 'img/' + (index + 1) + '.jpg')
        .appendTo(thumbnail);

    const thumbnailTitle = $('<div>')
        .addClass('thumbnail-title')
        .text(image.title)
        .appendTo(thumbnail);
});

$('.thumbnail').click(function() {
    const index = $(this).data('index');
    loadPhoto(index);
});

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);

    $('.thumbnail').removeClass('active');
    $('.thumbnail[data-index="' + photoNumber + '"]').addClass('active');

    $('#photoTitle').text(imagesData[photoNumber].title);
    $('#photoStory').text(imagesData[photoNumber].description);
};

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

loadPhoto(currentPhoto);
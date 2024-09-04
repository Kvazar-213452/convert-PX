document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var inputElement = document.getElementById("zzaaa");
    var inputValue = inputElement.value;

    var inputElement1 = document.getElementById("zzaaa1");
    var inputValue1 = inputElement1.value;

    const fileInput = document.getElementById('imageFile');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('w', inputValue); 
        formData.append('h', inputValue1); 

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.blob();
        })
        .then(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'image.xlsx';
            link.click();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

document.getElementById('previewBtn').addEventListener('click', function () {
    var inputElement = document.getElementById("zzaaa");
    var inputValue = parseInt(inputElement.value);
    console.log(inputValue)

    var inputElement1 = document.getElementById("zzaaa1");
    var inputValue1 = parseInt(inputElement1.value);

    const fileInput = document.getElementById('imageFile');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('w', inputValue); 
        formData.append('h', inputValue1); 

        fetch('/preview', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const img = document.getElementById('previewImage');
            img.src = url;
            img.style.display = 'block';
            img.style.width = inputValue1 * 4 + 'px'; 
            img.style.height = inputValue * 4 + 'px'; 
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
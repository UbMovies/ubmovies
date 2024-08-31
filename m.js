console.log('Script loaded');

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    const movies = [
        //movies
        { id: 56, title: 'Games Of Thrones Season 1 Ep 10', image: 'https://qph.cf2.quoracdn.net/main-qimg-4d3107c1b191cc6c6e1e4b3d9a3a6f1e', description: '', embedLink: 'https://turtlemotionfilm.wordpress.com/wp-content/uploads/2020/04/untitled20.mp4 ' },
        { id: 55, title: 'Games Of Thrones Season 1 Ep 9', image: 'https://qph.cf2.quoracdn.net/main-qimg-4d3107c1b191cc6c6e1e4b3d9a3a6f1e', description: '', embedLink: 'https://turtlemotionfilm.wordpress.com/wp-content/uploads/2020/04/untitled19-2.mp4 ' },
        { id: 54, title: 'Games Of Thrones Season 1 Ep 8', image: 'https://qph.cf2.quoracdn.net/main-qimg-4d3107c1b191cc6c6e1e4b3d9a3a6f1e', description: '', embedLink: ' https://turtlemotionfilm.wordpress.com/wp-content/uploads/2020/04/untitled18-1.mp4' },
        { id: 53, title: 'Games Of Thrones Season 1 Ep 7', image: 'https://qph.cf2.quoracdn.net/main-qimg-4d3107c1b191cc6c6e1e4b3d9a3a6f1e', description: '', embedLink: ' https://turtlemotionfilm.wordpress.com/wp-content/uploads/2020/04/untitled17.mp4' },
        { id: 52, title: 'Games Of Thrones Season 1 Ep 6', image: 'https://qph.cf2.quoracdn.net/main-qimg-4d3107c1b191cc6c6e1e4b3d9a3a6f1e', description: '', embedLink: ' https://turtlemotionfilm.wordpress.com/wp-content/uploads/2020/04/untitled16-1.mp4' },
        { id: 51, title: 'Games Of Thrones Season 1 Ep 5', image: 'https://qph.cf2.quoracdn.net/main-qimg-4d3107c1b191cc6c6e1e4b3d9a3a6f1e', description: '', embedLink: ' https://turtlemotionfilm.wordpress.com/wp-content/uploads/2020/04/untitled15.mp4' },
        { id: 50, title: 'Mr Robot Season 1 Ep 1', image: 'https://images.justwatch.com/poster/54255953/s718/season-1.jpg', description: '', embedLink: 'https://www.bilibili.tv/en/video/2045312911' },
        { id: 48, title: 'Peaky Blinders (Ep 6)', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10182741_b_v8_aa.jpg', description: '', embedLink: 'https://embedpk.net/embed-qg0mtbpgbax6.html' },
        { id: 47, title: 'Peaky Blinders (Ep 5)', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10182741_b_v8_aa.jpg', description: '', embedLink: 'https://d0000d.com/e/6pf3mc7hkbke' },
        { id: 46, title: 'Peaky Blinders (Ep 4)', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10182741_b_v8_aa.jpg', description: '', embedLink: 'https://embedpk.net/embed-t3zptzzbynxr.html' },
        { id: 45, title: 'Peaky Blinders (Ep 3)', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10182741_b_v8_aa.jpg', description: '', embedLink: 'https://d0000d.com/e/co8gjk88wr0p' },
        { id: 44, title: 'Peaky Blinders (Ep 2)', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10182741_b_v8_aa.jpg', description: '', embedLink: 'https://d0000d.com/e/rqulfe8j4ztz' },
       { id: 43, title: 'Peaky Blinders (Ep 1)', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10182741_b_v8_aa.jpg', description: '', embedLink: 'https://embedpk.net/embed-90dv8cph2rga.html' },
        
         { id: 41, title: 'Alice in Borderland Season 2', image: 'https://m.media-amazon.com/images/M/MV5BZDdhMTAwMmQtOTVlYi00OTcwLTllZGMtMjc4NGU0NzFhODM3XkEyXkFqcGc@._V1_.jpg', description: '', embedLink: 'https://d0000d.com/e/r58x293t2xj6' },
         { id:40 , title: 'Alice in Borderland Season 1', image: 'https://miro.medium.com/v2/resize:fit:1000/1*GXEa_EYfyz3c36Rms4UNfQ.jpeg', description: '', embedLink: 'https://embedpk.net/embed-rvny9tetx5ue.html' },
         { id: 39, title: 'Mirzapur (2024 Bonus Episode) ', image: 'https://staticimg.amarujala.com/assets/images/2024/07/03/marajapara-sajana-3_3302b21048ad530308ea55d030eabe79.jpeg?w=414', description: '', embedLink: 'https://embedpk.net/embed-oayu21lri5vg.html' },
        { id: 38, title: 'The Dictator', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QSymoEBeZPgA76J4igxmfXvc7-X0pHKB8g&s', description: '', embedLink: 'https://embedpk.net/embed-89t97qlz6pm1.html' },
        { id: 37, title: 'Southpaw', image: 'https://play-lh.googleusercontent.com/fbiqvL_vvTUEoNvtZFcYSSULNGFSc2OpOpoCaYcBNCHomi5jQNc1t3fpjlHnjUq35tBMXJHxLi7JKZq6t90', description: '', embedLink: 'https://d0000d.com/e/28d7os6kc705' },
        { id: 36, title: 'Atlas', image: 'https://m.media-amazon.com/images/M/MV5BOWM5OGE3NGMtODc4Yi00NThjLWE2NTMtMDE5YjBhYmY5ZTE3XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_.jpg', description: '', embedLink: 'https://embedpk.net/embed-z393svcx73i7.html' },

        { id: 22, title: 'Adhura', image: 'https://m.media-amazon.com/images/M/MV5BZjIzOTZjN2EtZDczZS00MjExLWI3MGMtYjkwYTAxZDM3ODg3XkEyXkFqcGdeQXVyMTA1NTY0NzQ0._V1_.jpg', description: '', embedLink: 'https://embedpk.net/embed-2uraulfq96ad.html' },
        { id: 21, title: 'Good Night Mommy', image: 'https://upload.wikimedia.org/wikipedia/en/5/55/GoodnightMommy2022poster.jpg', description: '', embedLink: 'https://embedpk.net/embed-l2nn8ebzxome.html' },
        { id: 19, title: 'The Curse of la Llorona', image: 'https://m.media-amazon.com/images/M/MV5BMWFkNjBkYjQtYjQyNC00NDIxLTg3ZDQtNDU3YzRiYWI5NjQyXkEyXkFqcGc@._V1_.jpg', description: '', embedLink: 'https://embedpk.net/embed-u8eq1xrjpymw.html' },
        { id: 20, title: 'The Black Phone', image: 'https://m.media-amazon.com/images/M/MV5BNjAwZTEyNzItYWJmZC00ZDU3LTk2NWYtNjNmNDlmYzEwNWEzXkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_.jpg', description: '', embedLink: 'https://embedpk.net/embed-gcy7q6iuiuab.html' },
        //The Family Man
        { id: 23, title: 'The Family Man Season 1 (1-10)', image: 'https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg', description: '', embedLink: 'https://embedpk.net/embed-ydk8zx34vcvk.html' },
        { id: 24, title: 'The Family Man Season 1', image: 'https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg', description: '', embedLink: 'https://embedpk.net/embed-nmubnjjzcqo4.html' },
        { id: 25, title: 'The Family Man Season 2', image: 'https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg', description: '', embedLink: 'https://embedpk.net/embed-t6tef3je2rap.html' },
       
        
        //.......
        //--GOT
        
{ id: 51, title: 'Games Of Thrones Season 1 Ep4', image: 'https://qph.cf2.quoracdn.net/main-qimg-4d3107c1b191cc6c6e1e4b3d9a3a6f1e', description: '', embedLink: 'https://turtlemotionfilm.wordpress.com/wp-content/uploads/2020/04/untitled14.mp4' },
                          
     { id: 50, title: 'Games Of Thrones Season 1 Ep3', image: 'https://qph.cf2.quoracdn.net/main-qimg-4d3107c1b191cc6c6e1e4b3d9a3a6f1e', description: '', embedLink: 'https://turtlemotionfilm.wordpress.com/wp-content/uploads/2020/04/untitled13.mp4' },
       { id: 49, title: 'Games Of Thrones Season 1 Ep2', image: 'https://qph.cf2.quoracdn.net/main-qimg-4d3107c1b191cc6c6e1e4b3d9a3a6f1e', description: '', embedLink: 'https://turtlemotionfilm.wordpress.com/wp-content/uploads/2020/04/untitled720.mp4' },
{ id: 57, title: 'Games Of Thrones Season 1 Ep 1', image: 'https://qph.cf2.quoracdn.net/main-qimg-4d3107c1b191cc6c6e1e4b3d9a3a6f1e', description: '', embedLink: 'https://geo.dailymotion.com/player.html?video=x8ray9v' },

        
//---insidious

  { id: 52, title: 'Insidious 3 ', image: 'https://m.media-amazon.com/images/M/MV5BMTUwNDU4NjE1N15BMl5BanBnXkFtZTgwOTc0MzA5NDE@._V1_FMjpg_UX1000_.jpg', description: '', embedLink: '//mixdrop.is/e/kndnodj7cx93v7' },
        { id: 52, title: 'Insidious 2 ', image: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Insidious_%E2%80%93_Chapter_2_Poster.jpg', description: '', embedLink: 'https://embedpk.net/embed-i1iiphgm1qp6.html' },
        { id: 52, title: 'Insidious (2010)', image: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg', description: '', embedLink: 'https://embedpk.net/embed-7yqszrwbwx6e.html' },
        
        // All of us dead
        
        { id: 26, title: 'All Of Us Dead Season 1', image: 'https://images.justwatch.com/poster/262858624/s718/season-2.jpg', description: '', embedLink: 'https://embedpk.net/embed-etu5d6imt514.html' },

        //Yeh family
        { id: 1, title: 'Yeh Meri Family Season 1', image: 'https://m.media-amazon.com/images/S/pv-target-images/f865659e6f495f3a3e6004a710a751967ec220c2b6bea176d87573d071d131ec.jpg', description: 'A nostalgic tale of childhood in the late 90s.', embedLink: 'https://embedpk.net/embed-5rlp8gib92ro.html' },
        { id: 2, title: 'Yeh Meri Family Season 2', image: 'https://assets.telegraphindia.com/telegraph/2023/Jun/1685959542_yea-meri-family-season-2.jpg', description: 'N/A', embedLink: 'https://d0000d.com/e/lrb9fav7vr2x' },
        { id: 3, title: 'Yeh Meri Family Season 3', image: 'https://assets.telegraphindia.com/telegraph/2023/Jun/1685959542_yea-meri-family-season-2.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-e6vjw3dwzjvy.html' },
        { id: 4, title: 'Yeh Meri Family Season 4', image: 'https://assets.telegraphindia.com/telegraph/2023/Jun/1685959542_yea-meri-family-season-2.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-05yln7cunoz9.html' },
    //----
        //Mirzapur
        { id: 5, title: 'Mirzapur Season 1', image: 'https://images.justwatch.com/poster/98979565/s332/mirzapur', description: 'N/A', embedLink: 'https://d0000d.com/e/k1ldzwbkir7r' },
        { id: 6, title: 'Mirzapur Season 2', image: 'https://images.justwatch.com/poster/98979565/s332/mirzapur', description: 'N/A', embedLink: 'https://embedpk.net/embed-ayssewp2860p.html' },
        { id: 7, title: 'Mirzapur Season 3', image: 'https://images.justwatch.com/poster/98979565/s332/mirzapur', description: 'N/A', embedLink: 'https://embedpk.net/embed-9zg82eo65od5.html' },
        //{ id: 4, title: 'Mirzapur Season 4', image: 'img/movie3.jpg', description: 'Description for Movie 3', embedLink: 'https://embedpk.net/embed-5rlp8gib92ro.html' },
///----
    //Aspirants
    { id: 8, title: 'Aspirants ', image: 'https://images.justwatch.com/poster/308848827/s718/season-2.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-cpew9pe3q6dp.html' },
    { id: 9, title: 'Aspirants Season 2', image: 'https://m.media-amazon.com/images/M/MV5BYWIzMDEyOTItNzA0OC00YmU1LTk3OWUtNjM4ZmE4ZDcyNWZmXkEyXkFqcGdeQXVyMTExMTIzMTA5._V1_.jpg', description: 'N/A', embedLink: 'https://d0000d.com/e/ae7urp0kdby1' },
   // { id: 3, title: 'Mirzapur Season 3', image: 'https://images.justwatch.com/poster/98979565/s332/mirzapur', description: 'N/A', embedLink: 'https://embedpk.net/embed-9zg82eo65od5.html' },

   

 //Sqd game
 { id: 10, title: 'Squid Game Season 1 ', image: 'https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg', description: 'N/A', embedLink: 'https://d0000d.com/e/ohog4wywc5fp' },
 //{ id: 2, title: 'Aspirants Season 2', image: 'https://m.media-amazon.com/images/M/MV5BYWIzMDEyOTItNzA0OC00YmU1LTk3OWUtNjM4ZmE4ZDcyNWZmXkEyXkFqcGdeQXVyMTExMTIzMTA5._V1_.jpg', description: 'N/A', embedLink: 'https://d0000d.com/e/ae7urp0kdby1' },
// { id: 3, title: 'Mirzapur Season 3', image: 'https://images.justwatch.com/poster/98979565/s332/mirzapur', description: 'N/A', embedLink: 'https://embedpk.net/embed-9zg82eo65od5.html' },

//Coch fct
{ id: 11, title: 'Charlie and the Chocolate Factory ', image: 'https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_QL75_UY281_CR0,0,190,281_.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-4sywgkikgaqm.html' },
//Money HST
{ id: 12, title: 'Money Heist Season 1', image: 'https://www.tvguide.com/a/img/catalog/provider/1/1/1-8454943726.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-u2yxfdno8v8r.html' },
{ id: 13, title: 'Money Heist Season 2', image: 'https://media.themoviedb.org/t/p/w500/65f9SDRqooLZEnaC629TnDDiGzb.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-fn50x1uxykpe.html' },
{ id: 14, title: 'Money Heist Season 3', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16764740_b_v13_aa.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-dz448jaue71y.html' },
{ id: 15, title: 'Money Heist Season 4', image: 'https://resizing.flixster.com/OYLIphw-Xq9FziHeJfKoF-mHNGQ=/fit-in/352x330/v2/https://resizing.flixster.com/J0fpMvc7IyH6IDAVNu5oyr4Mudw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjc4MjIzMC53ZWJw', description: 'N/A', embedLink: 'https://embedpk.net/embed-jlftujn92vb7.html' },
{ id: 16, title: 'Money Heist Season 5 (1-5)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pRDhL3_T1Iq-gBT9eaGSBdI1kkBg7R8bEQ&s', description: 'N/A', embedLink: 'https://embedpk.net/embed-v4zfownlg2cm.html' },
{ id: 17, title: 'Money Heist Season 5 (6-10)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pRDhL3_T1Iq-gBT9eaGSBdI1kkBg7R8bEQ&s', description: 'N/A', embedLink: 'https://embedpk.net/embed-85bt0mqfo3qz.html' },
{ id: 18, title: 'Money Heist Berlin', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2INEHsHP4TKokArmVPMJAD5k2-dhjz_wfQ&s', description: 'N/A', embedLink: 'https://embedpk.net/embed-or0w1hf5chc9.html' },


//Harry ptr


{ id: 26, title: 'Harry Potter and the Sorcerer’s Stone', image: 'https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-dv2wvj6pmtvk.html' },
{ id: 27, title: 'Harry Potter and the Chamber of Secrets', image: 'https://www.teesche.com/img/book/j_k_rowling_harry_potter_and_the_chamber_of_secrets.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-tz4wmrua7f69.html' },
{ id: 28, title: 'Harry Potter and the Prisoner of Azkaban', image: 'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-sf8xhh51qxja.html' },
{ id: 29, title: 'Harry Potter and  the Goblet of Fire', image: 'https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_FMjpg_UX1000_.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-wdqg3yahrny4.html' },
{ id: 30, title: 'Harry Potter and Order of the Phoenix', image: 'https://play-lh.googleusercontent.com/13rElAIsjU4P8ZzjmT3QC58uSqiYljg-hup1UcX52bnRVwA_8HFjtvE4DvMu06luiA5-_uqf8rONG0zDxA8', description: 'N/A', embedLink: 'https://embedpk.net/embed-gcxwb73dwkim.html' },
{ id: 31, title: 'Harry Potter and Half-Blood Prince', image: 'https://static.wikia.nocookie.net/harrypotter/images/4/45/Harry_and_Dumbledore_HBPF_promo.jpg/revision/latest?cb=20141215114252', description: 'N/A', embedLink: 'https://embedpk.net/embed-fj591rf4zro2.html' },
{ id: 32, title: 'Harry Potter and the Deathly Hallows (1)', image: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-p43nik2v1rhr.html' },
{ id: 33, title: 'Harry Potter and the Deathly Hallows (2)', image: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg', description: 'N/A', embedLink: 'https://d0000d.com/e/87n8xlja37cz' },
//{ id: 34, title: 'Harry Potter and the Sorcerer’s Stone', image: 'https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg', description: 'N/A', embedLink: 'https://embedpk.net/embed-dv2wvj6pmtvk.html' },

    ];

    const movieList = document.getElementById('movieList');
    const searchBar = document.getElementById('searchBar');
    const movieIframe = document.getElementById('movieIframe');

    function displayMovies(movieArray) {
        movieList.innerHTML = '';  
        movieArray.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                   <p class="views">Views: ${movie.view}</p>
            `;
            movieItem.addEventListener('click', () => {
                         const url = movie.embedLink;
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.click();
                // setTimeout(() => {
                  //  const viewsElement = movieItem.querySelector('.views');
                   // let movieView = parseInt(viewsElement.textContent.split(': ')[1], 10) || 0;
                    
                   
                   // movieView++;
                   // localStorage.setItem(`movie-${movie.id}-views`, movieView);
                   // viewsElement.textContent = `Views: ${movieView}`;
                  //}, 1000); 
                //movieIframe.src = `/proxy?url=${encodeURIComponent(movie.embedLink)}`;
                //movieIframe.requestFullscreen();


            });
            movieList.appendChild(movieItem);
        });
    }

    searchBar.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));
        displayMovies(filteredMovies);
    });

    displayMovies(movies);


    // Append the reset button to the document, below the search bar
    searchBar.parentNode.appendChild(resetButton);
});

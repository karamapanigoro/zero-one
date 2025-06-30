angular.module('profileApp', [])
.controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.currentPage = 'main';
  $scope.dropdownOpen = false;
  $scope.messageVisible = false;
  $scope.message = 'Together We Are';

  $scope.members = [
    {id:'member1', title:'F_19', image:'/f19.png', audio:'f19',
      socials: {
        tiktok: 'https://tiktok.com/@f19',
        whatsapp: 'https://wa.me/111111',
        instagram: 'https://instagram.com/f19'
      },
      game:{ff:{id:'xxx', username:'xxx'}, ml:{id:'',
      username:''}, mc:{id:'', username:''}}
    },
    {id:'member2', title:'112', image:'/112.png', audio:'112',
      socials: {
        tiktok: 'https://tiktok.com/@112',
        whatsapp: 'https://wa.me/222222',
        instagram: 'https://instagram.com/112'
      },
      game:{ff:{id:'xxx', username:'xxx'}, ml:{id:'',
      username:''}, mc:{id:'', username:''}}
    },
    {id:'member3', title:'↑K¹7', image:'/k17.png', audio:'k17',
      socials: {
        tiktok: 'https://tiktok.com/@k17',
        whatsapp: 'https://wa.me/333333',
        instagram: 'https://instagram.com/k17'
      },
      game:{ff:{id:'xxx', username:'xxx'}, ml:{id:'',
      username:''}, mc:{id:'', username:''}}
    },
    {id:'member4', title:'144', image:'/144.png', audio:'144',
      socials: {
        tiktok: 'https://tiktok.com/@144',
        whatsapp: 'https://wa.me/444444',
        instagram: 'https://instagram.com/144'
      },
      game:{ff:{id:'xxx', username:'xxx'}, ml:{id:'',
      username:''}, mc:{id:'', username:''}}
    },
    {id:'member5', title:'F_27', image:'/f27.png', audio:'f27',
      socials: {
        tiktok: 'https://tiktok.com/@f27',
        whatsapp: 'https://wa.me/555555',
        instagram: 'https://instagram.com/f27'
      },
      game:{ff:{id:'xxx', username:'xxx'}, ml:{id:'',
      username:''}, mc:{id:'', username:''}}
    }
  ];

  $scope.toggleDropdown = function() {
    $scope.dropdownOpen = !$scope.dropdownOpen;
  };

  $scope.showPage = function(page, audioId) {
    $scope.currentPage = page;
    $scope.dropdownOpen = false;
    stopAllAudio();
    if (audioId) document.getElementById(audioId).play();
  };

  $scope.showMessage = function() {
    $scope.messageVisible = true;
    $timeout(function() {
      $scope.messageVisible = false;
    }, 1500);
  };

  $scope.showGameInfo = function(member, gameKey) {
    const game = member.game[gameKey];
    $scope.gameTitle = member.title + ' ' + gameKey.toUpperCase() + ' Info';
    $scope.gameId = 'ID: ' + game.id;
    $scope.gameUsername = 'Username: ' + game.username;
    $scope.gamePopupVisible = true;
    $timeout(function() {
      $scope.gamePopupVisible = false;
    }, 3500);
  };

  $scope.galleryImages = [
    '/slide1.png',
    '/slide2.png',
    '/slide3.png',
    '/slide4.png',
    '/slide5.png',
    '/slide6.png',
    '/slide7.png',
    '/slide8.png',
    '/slide9.png',
    '/slide10.png'
  ];
  $scope.galleryOpen = false;
  $scope.currentGalleryImage = '';
  $scope.galleryFading = false;
  let galleryIndex = 0, galleryInterval;

  $scope.openGallery = function() {
    $scope.galleryOpen = true;
    galleryIndex = 0;
    $scope.currentGalleryImage = $scope.galleryImages[galleryIndex];
    $scope.galleryFading = true;
    galleryInterval = setInterval(function() {
      $scope.$apply(function() {
        $scope.galleryFading = false;
      });
      setTimeout(function() {
        galleryIndex = (galleryIndex + 1) % $scope.galleryImages.length;
        $scope.$apply(function() {
          $scope.currentGalleryImage = $scope.galleryImages[galleryIndex];
          $scope.galleryFading = true;
        });
      }, 500);
    }, 3000);
  };

  $scope.closeGallery = function() {
    $scope.galleryOpen = false;
    clearInterval(galleryInterval);
  };

  function stopAllAudio() {
    document.getElementById('mainMusic').pause();
    $scope.members.forEach(m => {
      const audio = document.getElementById(m.audio);
      if (audio) audio.pause();
    });
  }
}]);
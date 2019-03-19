const app = angular.module('Bookmarks', [])

app.controller('MainController', ['$http', function($http) {
    this.website = ''
    this.url = ''
    this.tags = ''
    const controller = this

    this.getBookmarks = () => {
        $http({
            method: 'GET',
            url: '/bookmarks'
        }).then((res) => {
            controller.bookmarks = res.data
            controller.website = ''
            controller.url = ''
            controller.tags = ''
            console.log(controller);
        })
    }
    this.createBookmark = () => {
        $http({
            method: 'POST',
            url: '/bookmarks',
            data: {
                website: this.website,
                url: this.url,
                tags: this.tags
            }
        }).then((res) => {
            controller.getBookmarks()
        }, (err) => {
            console.log(err)
        })
    }

    this.deleteBookmark = (bookmark) => {
        $http({
            method: 'DELETE',
            url: '/bookmarks/' + bookmark._id
        }).then((res) => {
            controller.getBookmarks()
        }, (err) => {
            console.log(err)       
        })
    }

    this.editBookmark = (bookmark) => {
        $http({
            method: 'PUT',
            url: '/bookmarks/' + bookmark._id,
            data: {
                website: this.editedWebsite,
                url: this.editedUrl,
                tags: this.editedTags
            }
        }).then((res) => {
            controller.getBookmarks()
        }, (err) => {
            console.log(err)
        })
    }
    this.getBookmarks()
}])
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'bloggers',  to: 'bloggers#create'
  get 'bloggers/new', to: 'bloggers#new', as: 'new_blogger'
  get 'bloggers/:id', to: 'bloggers#show', as: 'blogger'

  post 'posts', to: 'posts#create'
  get 'posts/new', to: 'posts#new'
  post 'posts/:id/like', to: 'posts#like', as: 'like_post'
  get 'posts/:id', to: 'posts#show', as: 'post'


  get 'destinations/:id', to: 'destinations#show', as: 'destination'
end

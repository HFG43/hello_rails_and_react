class Api::V1::GreetingsController < ApplicationController
  
  #GET /greetingDefins
  def index
    @greetings = Greeting.all.sample(1)
    render json: @greetings.to_json(only: [ :greeting ])
  end
end

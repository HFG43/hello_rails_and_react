class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all.sample(1)
    render json: @greetings.to_json(only: [ :greeting ])
  end
end

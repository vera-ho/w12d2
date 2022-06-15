class Api::BenchesController < ApplicationController
    def index
        @benches = Bench.all
        render json: @benches
    end

    ## How to test via AJAX?? Following gets 400 error
    # $.ajax({
    #     method: "POST", 
    #     url: "/api/benches", 
    #     data: { lat: 37.7774296, lng: -122.4256606, description: "test!" }
    # })
    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render json: @bench     # tbd
        else
            render json: @bench.errors.full_messages, status: 422
        end
    end

    private
    def bench_params
        params.require(:bench).permit(:lat, :lng, :description)
    end
end

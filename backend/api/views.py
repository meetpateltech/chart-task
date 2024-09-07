from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse

def candlestick_data(request):
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 32}, 
            {"x": "2023-01-03", "open": 32, "high": 40, "low": 28, "close": 38},
            {"x": "2023-01-04", "open": 38, "high": 45, "low": 33, "close": 36}, 
            {"x": "2023-01-05", "open": 36, "high": 42, "low": 31, "close": 40},
            {"x": "2023-01-06", "open": 40, "high": 48, "low": 35, "close": 39}, 
            {"x": "2023-01-07", "open": 39, "high": 46, "low": 34, "close": 44},
            {"x": "2023-01-08", "open": 44, "high": 50, "low": 39, "close": 42}, 
            {"x": "2023-01-09", "open": 42, "high": 48, "low": 37, "close": 46},
            {"x": "2023-01-10", "open": 46, "high": 52, "low": 41, "close": 45},
        ]
    }
    return JsonResponse(data)

def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "data": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
    }
    return JsonResponse(data)

def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C","Product D"],
        "data": [100, 150, 200, 250]
    }
    return JsonResponse(data)

def pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow", "Green"],
        "data": [300, 50, 100, 10]
    }
    return JsonResponse(data)
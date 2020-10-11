# Resume Project 2

This is a demo of the Dash interactive Python framework developed by [Plotly](https://plot.ly/).

This app displays live and closed major market data for stocks and etfs.

## How to run this app

(The following instructions apply to Windows command line.)

To run this app first clone repository and then open a terminal to the app folder.

Create and activate a new virtual environment (recommended) by running
the following:

On Windows

```
virtualenv venv
\venv\scripts\activate
```

Or if using linux

```bash
python3 -m venv myvenv
source myvenv/bin/activate
```

Install the requirements:

```
pip install -r requirements.txt
```

Create a .env file in the root

```
touch .env
```

add your finnhub api key to the env

```
export FINNHUB_API_KEY="YOUR_API_KEY"
```

Run the app:

```
python app.py
```

You can run the app on your browser at http://127.0.0.1:5000

## Resources

To learn more about Dash, please visit [documentation](https://plot.ly/dash).

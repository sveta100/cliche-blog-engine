"use strict";
import path from "path";
import { VueLoaderPlugin } from "vue-loader";
import ImageminPlugin from "imagemin-webpack";

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "./src/app.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          hotReload: true
        }
      },

      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader", //injects styles into DOM
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              indentedSyntax: false
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.css$/,
        oneOf: [
          // this matches `<style module>`
          {
            resourceQuery: /module/,
            use: [
              "vue-style-loader",
              {
                loader: "css-loader", //turn css into commonjs
                options: {
                  modules: true,
                  localIdentName: "[local]_[hash:base64:5]"
                }
              }
            ]
          },
          // this matches plain `<style>` or `<style scoped>`
          {
            use: ["vue-style-loader", "css-loader", "sass-loader"]
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: [".js", ".vue", ".json", ".ts"]
  }
};

// ==UserScript==
// @name         多邻国学习助手
// @namespace    https://fang.blog.miri.site/
// @version      1.0.0
// @description  阿巴阿巴
// @author       Mr_Fang
// @match        https://www.duolingo.com/*
// @require      https://drive.miri.site/?/upload_api/upload_plugin/blog/qrcode.min.js
// @icon         data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iNzUiIHZpZXdCb3g9IjAgMCA3NSA3NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjQ3NV85MDY4NCkiPjxwYXRoIGQ9Ik0xNS40NTczIDU0LjEyMDVDMTYuMzY4MiA1My4xMzg0IDE3LjkzNyA1My4wNjI5IDE4LjkyMzggNTMuOTk0NkwxOC45NDkxIDU0LjAxOThMMjEuODA4MyA1Ni42ODkxQzIyLjc5NTEgNTcuNjIwOSAyMi44NDU3IDU5LjE4MjIgMjEuOTA5NSA2MC4xNjQzQzIwLjk3MzMgNjEuMTQ2NCAxOS40MDQ1IDYxLjE5NjggMTguNDE3NyA2MC4yNjVMMTUuNTU4NSA1Ny41OTU3QzE0LjU3MTcgNTYuNjY0IDE0LjUyMTEgNTUuMTAyNiAxNS40NTczIDU0LjEyMDVaIiBmaWxsPSIjRjQ5MDAwIi8+PHBhdGggZD0iTTU4Ljc1MDMgNTQuMTE3N0M1OS42ODY1IDU1LjA5OTggNTkuNjM1OSA1Ni42NjExIDU4LjY0OTEgNTcuNTkyOUw1NS43ODk5IDYwLjI2MjJDNTQuODAzMSA2MS4xOTQgNTMuMjM0MyA2MS4xNDM2IDUyLjI5ODEgNjAuMTYxNUM1MS4zNjE5IDU5LjE3OTQgNTEuNDEyNSA1Ny42MTggNTIuMzk5MyA1Ni42ODYzTDU1LjI1ODUgNTQuMDE3QzU2LjI0NTQgNTMuMDg1MiA1Ny43ODg4IDUzLjEzNTYgNTguNzI1IDU0LjA5MjVDNTguNzI1IDU0LjA5MjUgNTguNzI1IDU0LjExNzcgNTguNzUwMyA1NC4xMTc3WiIgZmlsbD0iI0Y0OTAwMCIvPjxwYXRoIGQ9Ik04LjI5NTgzIDI1LjIzOEwzNi4yNTU1IDMyLjE2MzFDMzcuNDcgMzIuNDY1MyAzOC4yMDM4IDMzLjY3NDEgMzcuOTI1NSAzNC44ODI4QzM3Ljg3NDkgMzUuMTM0NyAzNy43NzM3IDM1LjM2MTMgMzcuNjIxOCAzNS41ODc5QzMzLjY3NDYgNDEuODMzMiAyNi4wMzMxIDQ0LjkzMDYgMTguNjQ0NyA0My4wOTIzQzExLjM1NzUgNDEuMzI5NSA2LjAxODU4IDM1LjA1OTEgNS40ODcyMiAyNy42MDUxQzUuNDExMzEgMjYuMzQ2IDYuMzQ3NTEgMjUuMjg4MyA3LjYxMjY2IDI1LjE4NzZDNy44NDAzOCAyNS4xNjI0IDguMDY4MTEgMjUuMTg3NiA4LjI5NTgzIDI1LjIzOFoiIGZpbGw9IiNDRTgyRkYiLz48cGF0aCBkPSJNNjUuODg1NCAyNS4yNDAxQzY3LjEgMjQuOTM3OSA2OC4zMzk4IDI1LjY2ODIgNjguNjQzNSAyNi44NzY5QzY4LjY5NDEgMjcuMTAzNiA2OC43MTk0IDI3LjM1NTQgNjguNzE5NCAyNy41ODJDNjguMTYyNyAzNS4wMzYgNjIuODQ5MSA0MS4yODEyIDU1LjU2MTkgNDMuMDY5MkM0OC4xNzM0IDQ0LjkwNzUgNDAuNTMyIDQxLjgzNTIgMzYuNTg0NyAzNS41NjQ4QzM1LjkwMTYgMzQuNTMyNCAzNi4yMDUyIDMzLjE0NzMgMzcuMjQyNiAzMi40Njc0QzM3LjQ0NSAzMi4zMTYzIDM3LjY5ODEgMzIuMjE1NiAzNy45NTExIDMyLjE2NTJMNjUuODg1NCAyNS4yNDAxWiIgZmlsbD0iI0NFODJGRiIvPjxwYXRoIGQ9Ik00OS43NDE5IDEzLjAyNTRDNDguODgxNiAxMy4wNTA2IDQ4LjAyMTMgMTMuMjI2OCA0Ny4yMTE2IDEzLjUyOUM0Mi4yNzc2IDE1LjYxOTIgMzkuMDEzNSAxNi42NTE3IDM3LjExNTggMTYuNjc2OEMzNS4yMTgxIDE2LjY1MTcgMzEuOTU0IDE1LjYxOTIgMjcuMDE5OSAxMy41MjlDMjYuMTg0OSAxMy4yMDE3IDI1LjMyNDYgMTMuMDUwNiAyNC40MzkgMTMuMDI1NEMyMC44NzEzIDEzLjAyNTQgMTcuOTg2OCAxNS45MjE0IDE3Ljk4NjggMTkuNDcyMVYzOS4zNDFDMTcuOTg2OCA0OS44NjcyIDI2LjUzOTIgNTguNDA0IDM3LjA5MDUgNTguNDU0NEM0Ny42NjcxIDU4LjQwNCA1Ni4xOTQxIDQ5Ljg2NzIgNTYuMTk0MSAzOS4zNDFWMTkuNDcyMUM1Ni4xOTQxIDE1LjkyMTQgNTMuMzA5NiAxMy4wMjU0IDQ5Ljc0MTkgMTMuMDI1NFoiIGZpbGw9IiNDRTgyRkYiLz48cGF0aCBkPSJNNDMuNzIwNSA0NC45MjlIMzguOTEyOUMzOC43MTA1IDQ0LjkyOSAzOC41MzM0IDQ1LjEwNTMgMzguNTMzNCA0NS4zMDY3QzM4LjUzMzQgNDUuMzMxOSAzOC41MzM0IDQ1LjM4MjMgMzguNTU4NyA0NS40MDc0QzM4Ljk4ODggNDYuNTQwNiA0MC4wNzY4IDQ3LjI5NjEgNDEuMzE2NyA0Ny4yNzA5QzQyLjYwNzEgNDcuMjcwOSA0My43NDU4IDQ2LjQ5MDMgNDQuMTI1MyA0NS40MDc0QzQ0LjE3NTkgNDUuMjA2IDQ0LjA3NDcgNDUuMDA0NSA0My44NzIzIDQ0Ljk1NDJDNDMuNzk2NCA0NC45MjkgNDMuNzcxMSA0NC45MjkgNDMuNzIwNSA0NC45MjlaTTM1LjY3NDEgNDUuNDA3NEMzNS43MjQ3IDQ1LjIwNiAzNS42MjM1IDQ1LjAwNDUgMzUuNDQ2NCA0NC45NTQyQzM1LjM5NTggNDQuOTI5IDM1LjM3MDUgNDQuOTI5IDM1LjMxOTkgNDQuOTI5SDMwLjUxMjRDMzAuMzA5OSA0NC45MDM4IDMwLjE1ODEgNDUuMDI5NyAzMC4xMzI4IDQ1LjIzMTJDMzAuMTMyOCA0NS4yODE1IDMwLjEzMjggNDUuMzU3MSAzMC4xNTgxIDQ1LjQwNzRDMzAuNTg4MyA0Ni41NjU4IDMxLjcwMTYgNDcuMjk2MSAzMi45MTYxIDQ3LjI3MDlDMzQuMTU2IDQ3LjI3MDkgMzUuMjk0NiA0Ni41MTU1IDM1LjY3NDEgNDUuNDA3NFpNMzkuNDk0OSA0OS4wMDg1SDM0LjY4NzNDMzQuNDg0OSA0OS4wMDg1IDM0LjMwNzggNDkuMTU5NiAzNC4zMDc4IDQ5LjM2MTFDMzQuMzA3OCA0OS40MTE0IDM0LjMwNzggNDkuNDM2NiAzNC4zMzMxIDQ5LjQ4N0MzNC43NjMyIDUwLjY0NTQgMzUuODc2NiA1MS4zNzU3IDM3LjA5MTEgNTEuMzUwNUMzOC4zODE1IDUxLjM1MDUgMzkuNTIwMiA1MC41OTUgMzkuODc0NCA0OS40ODdDMzkuOTI1IDQ5LjI4NTUgMzkuODIzOCA0OS4wODQxIDM5LjY0NjcgNDkuMDMzN0MzOS41OTYxIDQ5LjAwODUgMzkuNTQ1NSA0OS4wMDg1IDM5LjQ5NDkgNDkuMDA4NVoiIGZpbGw9IiNEODlCRkYiLz48cGF0aCBkPSJNMjguNjkwMiAxNi45NTIzTDM0LjQ1OTIgMjMuMjIyN0MzNC43MTIyIDIzLjQ5OTcgMzQuNjg2OSAyMy45NTMgMzQuMzgzMyAyNC4xNzk2QzM0LjMzMjcgMjQuMjMgMzQuMjgyMSAyNC4yNTUyIDM0LjIzMTUgMjQuMjgwM0MzMS42MjUzIDI1LjM4ODQgMjguNTg5IDI0LjE3OTYgMjcuNDc1NiAyMS41ODU4QzI2Ljg0MzEgMjAuMTI1MiAyNi45NDQzIDE4LjQ2MzIgMjcuNzI4NyAxNy4wNzgyQzI4LjAwNyAxNi42NTAxIDI4LjQxMTggMTYuNTk5NyAyOC42OTAyIDE2Ljk1MjNaIiBmaWxsPSIjRDg5QkZGIi8+PHBhdGggZD0iTTI1LjgzMTcgMTguNDM3TDMxLjQ5OTUgMjQuNzA3NEMzMS43NTI2IDI0Ljk4NDQgMzEuNzI3MyAyNS40Mzc3IDMxLjQyMzYgMjUuNjY0M0MzMS4zNzMgMjUuNzE0NyAzMS4zMjI0IDI1LjczOTggMzEuMjcxOCAyNS43NjVDMjguNjY1NiAyNi44NzMgMjUuNjU0NiAyNS42NjQzIDI0LjU0MTMgMjMuMDcwNUMyMy45MDg3IDIxLjYwOTkgMjQuMDA5OSAxOS45NDc5IDI0Ljc2OSAxOC41NjI5QzI0Ljk0NjEgMTguMjYwNyAyNS4zNTEgMTguMTM0OCAyNS42NTQ2IDE4LjMxMUMyNS43MzA1IDE4LjMzNjIgMjUuNzgxMSAxOC4zODY2IDI1LjgzMTcgMTguNDM3WiIgZmlsbD0iI0Q4OUJGRiIvPjxwYXRoIGQ9Ik0yNy41NzcyIDE5Ljc5NjlIMjguMTMzOUMzMi4wODExIDE5Ljc5NjkgMzUuMjk0NiAyMi45Njk5IDM1LjI5NDYgMjYuODk4M1YyNi45MjM1VjMxLjUzMTlDMzUuMjk0NiAzNS40NjAzIDMyLjEwNjQgMzguNjU4NSAyOC4xNTkyIDM4LjY1ODVIMjguMTMzOUgyNy41NzcyQzIzLjYzIDM4LjY1ODUgMjAuNDE2NSAzNS40ODU1IDIwLjQxNjUgMzEuNTU3VjMxLjUzMTlWMjYuOTIzNUMyMC40MTY1IDIyLjk5NSAyMy42MyAxOS43OTY5IDI3LjU3NzIgMTkuNzk2OVoiIGZpbGw9IiNEODlCRkYiLz48cGF0aCBkPSJNNDUuNDkxOSAxNi45NTAxQzQ1Ljc5NTYgMTYuNjIyOCA0Ni4yMDA0IDE2LjY0OCA0Ni40NTM1IDE3LjA1MDlDNDcuODQ1MSAxOS41MTg3IDQ2Ljk1OTUgMjIuNjQxNCA0NC40Nzk4IDI0LjAyNjRDNDMuMDg4MiAyNC44MDcgNDEuNDE4MiAyNC45MDc4IDM5LjkyNTMgMjQuMjc4MkMzOS41NzExIDI0LjEwMTkgMzkuNDQ0NiAyMy42OTkgMzkuNTk2NCAyMy4zNzE2QzM5LjYyMTcgMjMuMzIxMyAzOS42NDcgMjMuMjcwOSAzOS42OTc2IDIzLjIyMDZMNDUuNDkxOSAxNi45NTAxWiIgZmlsbD0iI0Q4OUJGRiIvPjxwYXRoIGQ9Ik00OC4zNTA3IDE4LjQzNzVDNDguNTc4NCAxOC4xNjA1IDQ5LjAwODYgMTguMTM1MyA0OS4yNjE2IDE4LjM2MkM0OS4zMTIyIDE4LjQxMjMgNDkuMzYyOCAxOC40NjI3IDQ5LjQxMzQgMTguNTM4MkM1MC44MDUxIDIxLjAwNjEgNDkuOTE5NSAyNC4xMjg3IDQ3LjQzOTggMjUuNTEzOEM0Ni4wNDgxIDI2LjI5NDQgNDQuMzc4MSAyNi4zOTUxIDQyLjg4NTMgMjUuNzY1NkM0Mi41MzEgMjUuNTg5MyA0Mi40MDQ1IDI1LjE4NjQgNDIuNTU2MyAyNC44NTlDNDIuNTgxNiAyNC44MDg3IDQyLjYwNjkgMjQuNzU4MyA0Mi42NTc1IDI0LjcwNzlMNDguMzUwNyAxOC40Mzc1WiIgZmlsbD0iI0Q4OUJGRiIvPjxwYXRoIGQ9Ik00Ni42MDUxIDE5Ljc5NjlDNTAuNTUyMyAxOS43OTY5IDUzLjc2NTggMjIuOTk1IDUzLjc2NTggMjYuOTIzNVYzMS41MzE5QzUzLjc2NTggMzUuNDYwMyA1MC41Nzc2IDM4LjY1ODUgNDYuNjMwNCAzOC42NTg1SDQ2LjYwNTFINDYuMDQ4NEM0Mi4xMDEyIDM4LjY1ODUgMzguODg3NyAzNS40ODU1IDM4Ljg4NzcgMzEuNTU3VjMxLjUzMTlWMjYuOTIzNUMzOC44ODc3IDIyLjk5NSA0Mi4wNzU5IDE5Ljc5NjkgNDYuMDIzMSAxOS43OTY5SDQ2LjA0ODRINDYuNjA1MVoiIGZpbGw9IiNEODlCRkYiLz48cGF0aCBkPSJNNDAuNzg1NyAyMi4wNDFDMzguODYyNyAyNC4wODA4IDM1LjY0OTIgMjQuMTgxNSAzMy41OTk3IDIyLjI2NzdDMzMuNTIzOCAyMi4xOTIxIDMzLjQ0NzggMjIuMTE2NiAzMy4zNzE5IDIyLjA0MUMzMy4zMjEzIDI2LjYyNDIgMzMuMzIxMyAzMC43MDM4IDMzLjM3MTkgMzQuMzA0OEwzNy4wNjYyIDM0LjI3OTdMNDAuNzYwNCAzNC4zMDQ4QzQwLjgzNjMgMzAuNzAzOCA0MC44MzYzIDI2LjU5OSA0MC43ODU3IDIyLjA0MVoiIGZpbGw9IiNEODlCRkYiLz48cGF0aCBkPSJNMjcuNjUzMiAyMi40NjY4QzMwLjU2MyAyMi40NjY4IDMyLjkxNjIgMjQuODA4OCAzMi45MTYyIDI3LjcwNDdWMzAuODUyNUMzMi44NDAzIDMzLjc0ODUgMzAuNDM2NSAzNi4wNDAxIDI3LjU1MiAzNS45NjQ2QzI0Ljc0MzQgMzUuOTE0MiAyMi40NjYxIDMzLjY0NzggMjIuNDE1NSAzMC44NTI1VjI3LjcwNDdDMjIuNDE1NSAyNC44MzM5IDI0Ljc0MzQgMjIuNDkyIDI3LjYyNzkgMjIuNDY2OEgyNy42NTMyWiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMjguMzg2OCAyNS40NjQ4QzI5Ljc3ODUgMjUuNDY0OCAzMC44OTE4IDI2LjU3MjkgMzAuODkxOCAyNy45NTc5VjMwLjY3NzZDMzAuODQxMiAzMi4wNjI2IDI5LjcwMjYgMzMuMTIwMyAyOC4zMTA5IDMzLjA5NTFDMjYuOTk1MiAzMy4wNDQ3IDI1LjkzMjQgMzEuOTg3MSAyNS44ODE4IDMwLjY3NzZWMjcuOTU3OUMyNS45MDcxIDI2LjU5OCAyNy4wMjA1IDI1LjQ5IDI4LjM4NjggMjUuNDY0OFoiIGZpbGw9IiM0QjRCNEIiLz48cGF0aCBkPSJNMjYuMzExOSAyNS4zMTQ1QzI3LjE5NzUgMjUuMzE0NSAyNy44ODA3IDI2LjAxOTYgMjcuODgwNyAyNi44NzU4QzI3Ljg4MDcgMjcuNzMyIDI3LjE3MjIgMjguNDM3MSAyNi4zMTE5IDI4LjQzNzFDMjUuNDUxNiAyOC40MzcxIDI0Ljc0MzIgMjcuNzMyIDI0Ljc0MzIgMjYuODc1OEMyNC43NDMyIDI2LjAxOTYgMjUuNDI2MyAyNS4zMTQ1IDI2LjI4NjYgMjUuMzE0NUgyNi4zMTE5WiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNNDYuNTI5MiAyMi40NjY4QzQ5LjQzOSAyMi40NjY4IDUxLjc5MjIgMjQuODA4OCA1MS43OTIyIDI3LjcwNDdWMzAuODUyNUM1MS43MTYzIDMzLjc0ODUgNDkuMzEyNSAzNi4wNDAxIDQ2LjQyOCAzNS45NjQ2QzQzLjYxOTQgMzUuOTE0MiA0MS4zNDIxIDMzLjY0NzggNDEuMjkxNSAzMC44NTI1VjI3LjcwNDdDNDEuMjkxNSAyNC44MzM5IDQzLjYxOTQgMjIuNDkyIDQ2LjUwMzkgMjIuNDY2OEM0Ni41MDM5IDIyLjQ2NjggNDYuNTAzOSAyMi40NjY4IDQ2LjUyOTIgMjIuNDY2OFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTQ1Ljc5NTUgMjUuNDY0OEM0Ny4xODcyIDI1LjQ2NDggNDguMzAwNSAyNi41NzI5IDQ4LjMwMDUgMjcuOTU3OVYzMC42Nzc2QzQ4LjI0OTkgMzIuMDYyNiA0Ny4xMTEzIDMzLjEyMDMgNDUuNzE5NiAzMy4wOTUxQzQ0LjQwMzkgMzMuMDQ0NyA0My4zNDExIDMxLjk4NzEgNDMuMjkwNSAzMC42Nzc2VjI3Ljk1NzlDNDMuMzE1OCAyNi41OTggNDQuNDI5MiAyNS40OSA0NS43OTU1IDI1LjQ2NDhaIiBmaWxsPSIjNEI0QjRCIi8+PHBhdGggZD0iTTQzLjQxNzEgMjUuMzE0NUM0NC4zMDI3IDI1LjMxNDUgNDQuOTg1OSAyNi4wMTk2IDQ0Ljk4NTkgMjYuODc1OEM0NC45ODU5IDI3LjczMiA0NC4yNzc0IDI4LjQzNzEgNDMuNDE3MSAyOC40MzcxQzQyLjU1NjggMjguNDM3MSA0MS44NDgzIDI3LjczMiA0MS44NDgzIDI2Ljg3NThDNDEuODIzIDI2LjA0NDcgNDIuNTA2MiAyNS4zMzk2IDQzLjQxNzEgMjUuMzE0NUM0My4zOTE4IDI1LjMxNDUgNDMuMzkxOCAyNS4zMTQ1IDQzLjQxNzEgMjUuMzE0NVoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTQxLjQ0MzYgMzMuNDQ4QzQ1LjM5MDkgMzEuNzYwOCA0OS4wMDkyIDMwLjYwMjQgNTIuMTcyIDI5Ljk5OEM1Mi4xNzIgMjkuOTk4IDUyLjgwNDYgMzUuNDYyNiA0OC42NTQ5IDM2Ljc0NjlDNDMuMzQxMyAzOC40MDkgNDEuNDQzNiAzMy40NDggNDEuNDQzNiAzMy40NDhaTTI1LjU1MzQgMzYuNzcyMUMyMS4zNzg0IDM1LjQ4NzggMjIuMDM2MyAzMC4wMjMyIDIyLjAzNjMgMzAuMDIzMkMyNS4xOTkyIDMwLjYwMjQgMjguODQyOCAzMS43ODYgMzIuNzY0NyAzMy40NzMyQzMyLjc2NDcgMzMuNDQ4IDMwLjg2NyAzOC40MDkgMjUuNTUzNCAzNi43NzIxWiIgZmlsbD0iI0Q4OUJGRiIvPjxwYXRoIGQ9Ik0zNy4wOTExIDMwLjQwMDRDMzguNTg0IDMwLjQwMDQgMzkuNzk4NSAzMS42MDkxIDM5LjgyMzggMzMuMDk0OUMzOS44MjM4IDMzLjA5NDkgMzkuODIzOCAzMy4wOTQ5IDM5LjgyMzggMzMuMTIwMVYzNy42Mjc3QzM5LjgyMzggMzkuMTEzNSAzOC42MDkzIDQwLjM0NzQgMzcuMDkxMSA0MC4zNDc0QzM1LjU5ODIgNDAuMzQ3NCAzNC4zNTg0IDM5LjEzODcgMzQuMzU4NCAzNy42Mjc3VjMzLjEyMDFDMzQuMzgzNyAzMS42MzQzIDM1LjU5ODIgMzAuNDI1NiAzNy4wOTExIDMwLjQwMDRaIiBmaWxsPSIjRjQ5MDAwIi8+PHBhdGggZD0iTTM3LjA5MDkgMzEuNDU1MUMzOC4yNTQ4IDMxLjQ1NTEgMzkuMTkxIDMyLjM4NjggMzkuMTkxIDMzLjU0NTJWMzYuNTQxOUMzOS4xOTEgMzcuNzAwMyAzOC4yNTQ4IDM4LjYzMjEgMzcuMDkwOSAzOC42MzIxQzM1LjkyNjkgMzguNjMyMSAzNS4wMTYgMzcuNzAwMyAzNC45OTA3IDM2LjU0MTlWMzMuNTQ1MkMzNC45OTA3IDMyLjQxMiAzNS45MjY5IDMxLjQ4MDMgMzcuMDkwOSAzMS40NTUxWiIgZmlsbD0iI0I2NkUyOCIvPjxwYXRoIGQ9Ik0zNy4wOTE0IDMzLjU3MzRMNDAuNzM1IDMyLjk2OUM0MC44MTA5IDMyLjk0MzkgNDAuODYxNSAzMi44OTM1IDQwLjgzNjIgMzIuODE4QzQwLjQ4MiAzMC43NTMgMzguNDgzMSAyOS4zNjggMzYuNDA4MiAyOS43NDU3QzM0LjgzOTUgMzAuMDIyNyAzMy41OTk2IDMxLjI1NjYgMzMuMzIxMyAzMi44MThDMzMuMzIxMyAzMi44OTM1IDMzLjM3MTkgMzIuOTY5IDMzLjQyMjUgMzIuOTY5TDM3LjA5MTQgMzMuNTczNFoiIGZpbGw9IiNGRkMyMDAiLz48cGF0aCBkPSJNMzcuOTI2IDMxLjM4M0MzNy44NzU0IDMxLjM4MyAzNy44MjQ4IDMxLjM4MyAzNy43NzQyIDMxLjM1NzhDMzcuMzE4NyAzMS4yMzE5IDM2Ljg2MzMgMzEuMjMxOSAzNi40MDc4IDMxLjM1NzhDMzYuMTA0MiAzMS40MzM0IDM1LjgyNTggMzEuMjMxOSAzNS43NDk5IDMwLjkyOTdDMzUuNjk5MyAzMC42NTI3IDM1Ljg1MTEgMzAuMzc1NyAzNi4xMDQyIDMwLjMwMDJDMzYuNzYyIDMwLjEyMzkgMzcuNDQ1MiAzMC4xMjM5IDM4LjA3NzggMzAuMzAwMkMzOC4zODE0IDMwLjM3NTcgMzguNTMzMiAzMC43MDMxIDM4LjQ1NzMgMzAuOTgwMUMzOC4zODE0IDMxLjIwNjcgMzguMTc5IDMxLjM4MyAzNy45MjYgMzEuMzgzWiIgZmlsbD0iI0ZGREUwMCIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzI0NzVfOTA2ODQiPjxyZWN0IHdpZHRoPSI2NC4yMDc4IiBoZWlnaHQ9IjQ4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC45ODY4MiAxMykiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    let connectionId = ""; // 从接口获取的连接标识符
    let targetWSId = ""; // 发送目标
    let fangdou = 500; // 500毫秒防抖
    let fangdouSetTimeOut; // 防抖定时器
    let wsConn; // 全局ws链接
    let coyoteState = false; // 连接状态
    let strength = 0; // 强度
    let softStrength = 0; // 软上限
    let addStrength = 2; // 每次答错增加强度
    let reduceStrength = 2; // 每完成单元减小强度
    let wave = '[]'; // 波形
    let sendTime = 5; // 输出时长

    const feedBackMsg = {
        "feedback-0": "A通道：○",
        "feedback-1": "A通道：△",
        "feedback-2": "A通道：□",
        "feedback-3": "A通道：☆",
        "feedback-4": "A通道：⬡",
        "feedback-5": "B通道：○",
        "feedback-6": "B通道：△",
        "feedback-7": "B通道：□",
        "feedback-8": "B通道：☆",
        "feedback-9": "B通道：⬡",
    }

    // 创建 Tips 窗口
    const createWindow = (msg, btnText = '', windowClass = 'coyoteWindow') => {
        var tipHTML = `
    <div class="coyoteWindowBg"></div>
    <div class="coyoteWindow">
        <div class="coyoteWindowBox">
            <div class="coyoteWindowContent">
                <span>${msg}</span>`;
        if(btnText != '') {
            tipHTML +=`
                <button class="_coyoteBtn_1M9iF _coyoteBtn_36g4N _coyoteBtn_2YF0P _coyoteBtn_1V1Gt _coyoteBtn_vSCTx" onclick="document.getElementById('${windowClass}').remove()">
                    <span class="_1o-YO">${btnText}</span>
                </button>`;
        }
        tipHTML +=`
            </div>
        </div>
    </div>
`;
        var newWindow = document.createElement('div');
        newWindow.setAttribute('id', windowClass);
        newWindow.setAttribute('style', 'width: 100%; top: 0; position: fixed; z-index: 999;');
        newWindow.innerHTML = tipHTML;
        document.body.appendChild(newWindow);
    }

    // 创建郊狼连接
    const createCoyoteSocket = () => {
        wsConn = new WebSocket('wss://coyote.babyfang.cn/');

        wsConn.onopen = function (event) {
            //createWindow("WebSocket连接已建立", 'OK!');
        }

        wsConn.onmessage = function (event) {
            let msg = {};
            try {
                msg = JSON.parse(event.data);
            } catch (e) {
                console.log(event.data);
                return;
            }

            //createWindow(event.data, 'OK!');

            switch (msg.type) {
                case 'bind':
                    if (!msg.targetId) {
                        connectionId = msg.clientId;
                        createWindow(`${connectionId}<br><div id="CoyoteQRCode"></div><br>扫描二维码建立连接`, '取消', 'createWSWindow');
                        new QRCode(document.getElementById('CoyoteQRCode'), {
                            text: "https://www.dungeon-lab.com/app-download.php#DGLAB-SOCKET#wss://coyote.babyfang.cn/" + connectionId,
                            width: 256,
                            height: 256
                        });
                    } else {
                        if (msg.clientId != connectionId) {
                            createWindow('错误的clientId', 'OK');
                            return;
                        }
                        targetWSId = msg.targetId;
                        console.log("收到 targetId: " + msg.targetId + ", msg: " + msg.message);
                        document.getElementById('createWSWindow').remove();
                        createWindow('郊狼连接成功', 'ok');
                        coyoteState = true;
                        document.getElementsByClassName('lightingDiv')[0].classList.add('onopen');
                    }
                    break;
                case 'break':
                    if (msg.targetId != targetWSId);
                        return;
                    console.log("收到断开连接指令");
                    document.getElementsByClassName('lightingDiv')[0].classList.remove('onopen');
                    coyoteState = false;
                    break;
                case 'error':
                    if (msg.targetId != targetWSId);
                        return;
                    console.log("对方已断开，code：" + msg.message);
                    document.getElementsByClassName('lightingDiv')[0].classList.remove('onopen');
                    coyoteState = false;
                    break;
                case 'heartbeat':
                    console.log("收到心跳包");
                    break;
                case 'msg':
                    var result = [];
                    if(msg.message.includes("strength")) {
                        const numbers = msg.message.match(/\d+/g).map(Number);
                        result.push({ type: "strength", numbers: numbers });

                        console.log(numbers);

                        strength = numbers[0];
                        softStrength = numbers[2];

                        document.getElementById('nowStrength').textContent = strength;
                        document.getElementById('strengthInput').value = strength;
                        document.getElementById('maxStrength').textContent = softStrength;
                    } else if (msg.message.includes("feedback")) {
                        createWindow(feedBackMsg[msg.message], 'OK');
                    }
                    break;
                default:
                    createWindow("未知消息类型：" + JSON.stringify(msg), 'OK');
                    break;
            }
        }

        wsConn.onerror = function (event) {
            createWindow("WebSocket 连接出错", 'OK!');
            document.getElementsByClassName('lightingDiv')[0].classList.remove('onopen');
            coyoteState = false;
        }

        wsConn.onclose = function (event) {
            createWindow("WebSocket 连接关闭", 'OK!');
            document.getElementsByClassName('lightingDiv')[0].classList.remove('onopen');
            coyoteState = false;
        }
    }

    // 增减操作
    const addOrReduce = (type, channelIndex, strength) => {
        // 1 减少  2 增加  3 设置到
        // channel:1-A    2-B
        // 获取当前通道的当前值
        // let channelStrength = channelIndex === 1 ? channelAStrength.value : channelBStrength.value;
        let channelStrength = strength;

        // 如果是设置操作
        if (type === 3) {
            channelStrength = strength;
        }
        // 减少
        else if (type === 1) {
            channelStrength = Math.max(channelStrength - strength, 0);
        }
        // 增加
        else if (type === 2) {
            channelStrength = Math.min(channelStrength + strength, 200);
        }

        // 构造消息对象并发送
        let data = {};
        if (type === 3) {
            data = { type, strength: channelStrength, message: "set channel", channel: channelIndex };
        } else {
            // 这里用 type 4 可以自定义增加减小是数值，type 2/3 固定是 1
            data = { type: 4, message: "strength-" + channelIndex + "+" + (type - 1) + "+" + strength };
        }

        sendWsMsg(data);
    }

    // 发送消息
    const sendWsMsg = (messageObj) => {
        //createWindow(messageObj, 'aaa');
        messageObj.clientId = connectionId;
        messageObj.targetId = targetWSId;
        if (!messageObj.hasOwnProperty('type')) {
            messageObj.type = "msg";
        }
        wsConn.send(JSON.stringify((messageObj)));
    }

    // 发送波形消息
    function sendWaveData(time, wave) {
        if (fangdouSetTimeOut) {
            return;
        }

        const msg1 = `A:${wave}`;
        const data = {
            type: "clientMsg", message: msg1, message2: [], time1: time, time2: 0
        };

        sendWsMsg(data);

        fangdouSetTimeOut = setTimeout(() => {
            clearTimeout(fangdouSetTimeOut);
            fangdouSetTimeOut = null;
        }, fangdou);
    }

    // 监听 DOM 变化
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(node => {
                    // 答错
                    if (node.nodeType === Node.ELEMENT_NODE && node.innerHTML.indexOf("blame-incorrect") != -1) {
                        // alert('你答错了！开电！');
                        // createWindow('你答错了！开电！', '继续努力');
                        addOrReduce(2, 1, addStrength);
                        sendWaveData(sendTime, wave);
                    }
                    // 完成单元
                    if (node.nodeType === Node.ELEMENT_NODE && node.innerHTML.indexOf('session-complete-slide') != -1) {
                        // alert('你答错了！开电！');
                        createWindow('完成一单元！奖励强度 -' + reduceStrength + '！', '继续努力');
                        addOrReduce(1, 1, reduceStrength);
                    }
                });
            }
        });
    });

    // 监听器配置
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // GM菜单 createSocket
    const createSocket = () => {
        if(coyoteState == false) {
            createCoyoteSocket();
        } else {
            createWindow('连接已经建立，请勿重复创建连接！', 'OK');
        }
    }

    // GM菜单 openSettings
    const openSettings = () => {
        if(coyoteState == false) {
            createWindow('请先建立 WebSocket 连接！', 'OK');
            return;
        }
        if(document.getElementById('settingsWindow').style.display == 'none') {
            document.getElementById('settingsWindow').style.display = 'block';
        } else {
            document.getElementById('settingsWindow').style.display = 'none';
        }
    }

    // 设置浮窗
    const createSettingsWindow = () => {
        var settingsHTML = `
    <div class="coyoteWindowBg"></div>
    <div class="coyoteWindow">
        <div class="coyoteWindowBox">
            <div class="coyoteWindowContent">
                <h2>设置</h2>
                <label class="settingsLabel" for="strengthInput">强度设定</label>
                <div class="_coyoteBtn_3nbuA"><input id="strengthInput" class="_coyoteBtn_3DZXI" type="number" value="0"></div>
                <label class="settingsLabel" for="waveInput">波形设定 <a onclick="window.open('https://blive-coyote.babyfang.cn/waveHelper.html', '', 'width=500,height=1000,left=0');" style="color: rgb(var(--color-fox))">波形助手</a></label>
                <div class="_coyoteBtn_3nbuA"><input id="waveInput" class="_coyoteBtn_3DZXI" type="text" value="[]"></div>
                <label class="settingsLabel" for="timeInput">输出时长 (s)</label>
                <div class="_coyoteBtn_3nbuA"><input id="timeInput" class="_coyoteBtn_3DZXI" type="number" value="5"></div>
                <label class="settingsLabel" for="addStrengthInput">每次错误增加强度</label>
                <div class="_coyoteBtn_3nbuA"><input id="addStrengthInput" class="_coyoteBtn_3DZXI" type="number" value="2"></div>
                <label class="settingsLabel" for="reduceStrengthInput">完成单元减小强度</label>
                <div class="_coyoteBtn_3nbuA"><input id="reduceStrengthInput" class="_coyoteBtn_3DZXI" type="number" value="2"></div>
                <button class="_coyoteBtn_1M9iF _coyoteBtn_36g4N _coyoteBtn_2YF0P _coyoteBtn_1V1Gt _coyoteBtn_vSCTx" onclick="document.getElementById('settingsWindow').style.display = 'none'">
                    <span class="_1o-YO">关闭</span>
                </button>
            </div>
        </div>
    </div>
`;
        var newWindow = document.createElement('div');
        newWindow.setAttribute('id', 'settingsWindow');
        newWindow.setAttribute('style', 'width: 100%; top: 0; position: fixed; z-index: 999; display: none;');
        newWindow.innerHTML = settingsHTML;
        document.body.appendChild(newWindow);
    }

    // 初始化
    const init = () => {
        wave = GM_getValue("coyoteWave") == undefined ? '[]' : GM_getValue("coyoteWave");
        sendTime = GM_getValue("coyoteTime") == undefined ? '5' : GM_getValue("coyoteTime");
        addStrength = GM_getValue("coyoteAddStrength") == undefined ? '2' : GM_getValue("coyoteAddStrength");
        reduceStrength = GM_getValue("coyoteReduceStrength") == undefined ? '2' : GM_getValue("coyoteReduceStrength");

        var lightingDiv = document.createElement('div');
        lightingDiv.setAttribute('class', 'lightingDiv');
        lightingDiv.innerHTML = `<div class="lightingNum"><span class="iconAndText"><img height="28px" src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMyLjA4MiAxMC4yODc2QzMxLjc5MDQgNy40MTk3MyAyOC4xMDgzIDYuNDMzMTMgMjYuNDIxOCA4Ljc3MDkyTDEyLjU0MTIgMjguMDEyMUMxMS4yNTc1IDI5Ljc5MTYgMTIuMTUyNCAzMi4zMDU1IDE0LjI3MTkgMzIuODczNEwyMi4xNjgyIDM0Ljk4OTJMMjMuMzM0NiA0Ni40NTkxQzIzLjYyNjIgNDkuMzI3IDI3LjMwODMgNTAuMzEzNSAyOC45OTQ4IDQ3Ljk3NThMNDIuODc1NCAyOC43MzQ2QzQ0LjE1OTIgMjYuOTU1MSA0My4yNjQyIDI0LjQ0MTIgNDEuMTQ0NyAyMy44NzMzTDMzLjI0ODUgMjEuNzU3NUwzMi4wODIgMTAuMjg3NloiIGZpbGw9IiNDRTgyRkYiLz48cGF0aCBkPSJNMTUuMjY0NyAzMC41NTc4QzE0LjU0NjYgMzAuMzYzOSAxNC40NzczIDI5LjM3MjQgMTUuMTYxNCAyOS4wODA1TDIwLjY0OTMgMjYuNzM5QzIxLjE0NDggMjYuNTI3NiAyMS43MDA5IDI2Ljg2NzcgMjEuNzM4NSAyNy40MDUxTDIyLjAxMSAzMS4zMDE2QzIyLjA0ODUgMzEuODM5IDIxLjU0NTIgMzIuMjUzMSAyMS4wMjUxIDMyLjExMjdMMTUuMjY0NyAzMC41NTc4WiIgZmlsbD0iIzkwNjlDRCIvPjxwYXRoIGQ9Ik00MC40MTU3IDI1LjgwNTZDNDEuMTMzOCAyNS45OTk1IDQxLjIwMzEgMjYuOTkxIDQwLjUxOSAyNy4yODI5TDM1LjAzMTEgMjkuNjI0NEMzNC41MzU2IDI5LjgzNTggMzMuOTc5NSAyOS40OTU3IDMzLjk0MTkgMjguOTU4M0wzMy42Njk1IDI1LjA2MThDMzMuNjMxOSAyNC41MjQ0IDM0LjEzNTMgMjQuMTEwMyAzNC42NTU0IDI0LjI1MDdMNDAuNDE1NyAyNS44MDU2WiIgZmlsbD0iI0Q4OUJGRiIvPjwvc3ZnPg=="><span style="color: rgb(var(--color-beetle)); font-weight: bold;"><span id="nowStrength">0</span>/<span id="maxStrength">0</span></span></span></div></div>`;
        var coyoteCSS = document.createElement('style');
        coyoteCSS.innerHTML = `
.lightingDiv {
    position: fixed;
    z-index: 998;
    padding: 18px;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(var(--color-snow));
    border: 2px solid rgb(var(--color-swan));
    border-radius: 16px;
}
.coyoteWindowBg {
    position: fixed;
    z-index: 300;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: rgb(var(--color-black), .4);
}
.coyoteWindow {
    position: relative;
    z-index: 310;
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: var(--viewport-height);
}
.coyoteWindowBox {
    --modal-padding: 24px;
    width: 384px;
    border-radius: var(--modal-border-radius, 16px);
    margin: var(--modal-margin, 24px);
    align-self: var(--modal-position-y);
    padding: var(--modal-padding, 0);
    position: relative;
    background: rgb(var(--color-snow));
}
.coyoteWindowContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.iconAndText {
    align-items: center;
    display: flex;
    flex-direction: row;
}
.settingsLabel {
    text-align: left;
    padding-top: 10px;
}
.onopen {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iOTQiIGhlaWdodD0iOTgiIHZpZXdCb3g9IjAgMCA5NCA5OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTExLjcxMSA2Mi4zMDgxQzExMC4xMSA4OS44MjEgODYuODY2NyAxMTEuMTkxIDU5Ljc5NTIgMTEwLjA0QzMyLjcyMzcgMTA4Ljg4OSAxMi4wNzU2IDg1LjY1MjggMTMuNjc2MyA1OC4xMzk5QzE1LjI3NzEgMzAuNjI3MSAzOC41MjA1IDkuMjU2NTcgNjUuNTkyIDEwLjQwNzZDOTIuNjYzNSAxMS41NTg2IDExMy4zMTIgMzQuNzk1MyAxMTEuNzExIDYyLjMwODFaIiBmaWxsPSIjQ0U4MkZGIi8+PHBhdGggZD0iTTU5LjUyNDQgMTE0LjY5NkM5MC4wODMyIDExNS45OTUgMTE1LjIwNCA5Mi4wMzI0IDExNi45MjEgNjIuNTI5NkMxMTguNjM3IDMzLjAyNjggOTYuNDIxNyA3LjA1MTUzIDY1Ljg2MjkgNS43NTIyNEMzNS4zMDQgNC40NTI5NiAxMC4xODI5IDI4LjQxNTYgOC40NjYzNCA1Ny45MTg0QzYuNzQ5ODMgODcuNDIxMiAyOC45NjU1IDExMy4zOTcgNTkuNTI0NCAxMTQuNjk2WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSI5Ljg5NjUiLz48ZWxsaXBzZSBvcGFjaXR5PSIwLjQiIHJ4PSIxNS44Mjg3IiByeT0iMTguMDAzMyIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNTI4OSAwLjA0NDc2NjMgLTAuMDU0NzM3NCAwLjk0MDgwNSA0Ny4wMTQ5IDQyLjU3OSkiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04My4yMDIyIDM2LjgxOTNDODIuMTIwNSAzNC45Mzg5IDc5LjcyNzEgMzQuMzMxNCA3Ny44NTY0IDM1LjQ2MjNDNzUuOTg1NiAzNi41OTMyIDc1LjM0NTkgMzkuMDM0MyA3Ni40Mjc2IDQwLjkxNDdWNDAuOTE0N0M3Ny4wODE0IDQyLjA1MTQgNzUuODk1NSA0My4zNDI0IDc0LjUxODUgNDIuOTkyOEw1Ni40Njg2IDM4LjQxMDlDNDkuNTE5OSAzNi42NDcgNDIuMzgxNCA0MC45NjI0IDQwLjUyNDEgNDguMDQ5N0wzOS4zNDc4IDUyLjUzODJDMzguNzg5OSA1NC42Njc1IDQwLjAyOTkgNTYuODIzMyA0Mi4xMTc1IDU3LjM1MzJDNDQuMjA1MiA1Ny44ODMyIDQ2LjM0OTkgNTYuNTg2NiA0Ni45MDc5IDU0LjQ1NzRMNDguMDg0MiA0OS45Njg4QzQ4LjgyNTQgNDcuMTQwMSA1MS42NzQ2IDQ1LjQxNzcgNTQuNDQ3OSA0Ni4xMjE3TDcyLjY4MzMgNTAuNzUwOEM3NC4wNDQyIDUxLjA5NjIgNzQuMzI2OCA1Mi43MDYgNzMuMTUxNCA1My40MTY2VjUzLjQxNjZDNzEuMjgwNiA1NC41NDc1IDcwLjY0MDkgNTYuOTg4NyA3MS43MjI1IDU4Ljg2OUM3Mi44MDQyIDYwLjc0OTQgNzUuMTk3NSA2MS4zNTcgNzcuMDY4MyA2MC4yMjYxTDg4LjAyMTUgNTMuNjA0NkM4OC45ODQyIDUzLjA5NTggODkuNzQzNyA1Mi4xOTEzIDkwLjA0MzkgNTEuMDQ1OEM5MC4xNDI3IDUwLjY2ODcgOTAuMTg1MSA1MC4yOTA3IDkwLjE3NjQgNDkuOTIxQzkwLjE2MjcgNDkuMjc0MyA4OS45OTI4IDQ4LjYyNDYgODkuNjUxMiA0OC4wMzA3TDgzLjIwMjIgMzYuODE5M1pNNTIuOTY3NiA2Mi42NTY1QzU0LjA0OTIgNjQuNTM2OSA1My40MDk1IDY2Ljk3OCA1MS41Mzg4IDY4LjEwODlWNjguMTA4OUM1MC4zNTg3IDY4LjgyMjMgNTAuNjQyNSA3MC40Mzg1IDUyLjAwODcgNzAuNzg1M0w3MC4yNDA3IDc1LjQxMzVDNzMuMDE0IDc2LjExNzUgNzUuODYzMiA3NC4zOTUxIDc2LjYwNDQgNzEuNTY2NUw3Ny43ODA3IDY3LjA3NzlDNzguMzM4NyA2NC45NDg2IDgwLjQ4MzQgNjMuNjUyMSA4Mi41NzEgNjQuMTgyQzg0LjY1ODcgNjQuNzEyIDg1Ljg5ODcgNjYuODY3NyA4NS4zNDA3IDY4Ljk5N0w4NC4xNjQ1IDczLjQ4NTZDODIuMzA3MiA4MC41NzI4IDc1LjE2ODYgODQuODg4MyA2OC4yMiA4My4xMjQ0TDUwLjE2NDEgNzguNTQwOUM0OC43OTI1IDc4LjE5MjcgNDcuNjExMyA3OS40Nzg2IDQ4LjI2MjYgODAuNjEwOVY4MC42MTA5QzQ5LjM0NDIgODIuNDkxMyA0OC43MDQ1IDg0LjkzMjQgNDYuODMzNyA4Ni4wNjMzQzQ0Ljk2MyA4Ny4xOTQyIDQyLjU2OTYgODYuNTg2NyA0MS40ODggODQuNzA2M0wzNS4xMDQ0IDczLjYwODdDMzQuNTUxOCA3Mi43MTgxIDM0LjM1MzYgNzEuNjAwMiAzNC42NDQ3IDcwLjQ4OTRDMzQuNzg2NiA2OS45NDgxIDM1LjAzMSA2OS40NjA2IDM1LjM1MDkgNjkuMDQzM0MzNS42NDk2IDY4LjY1MjYgMzYuMDI0IDY4LjMxMDcgMzYuNDY3NyA2OC4wNDI0TDQ3LjYyMTggNjEuMjk5NUM0OS40OTI2IDYwLjE2ODYgNTEuODg2IDYwLjc3NjIgNTIuOTY3NiA2Mi42NTY1WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=);
    background-size: 32px;
    background-position: bottom right;
    background-repeat: no-repeat;
}
div#CoyoteQRCode > img {
    display: unset !important;
}

._coyoteBtn_1V1Gt {
    margin-top: 32px;
}
._coyoteBtn_vSCTx {
    width: 100%;
}
._coyoteBtn_1M9iF {
    --__internal__background-color: var(--web-ui_button-background-color, rgb(var(--color-macaw)));
    --__internal__background-color-disabled: var(--web-ui_button-background-color-disabled, rgb(var(--color-swan)));
    --__internal__border-color: var(--web-ui_button-border-color, rgb(var(--color-whale)));
    --__internal__border-radius: var(--web-ui_button-border-radius, 12px);
    --__internal__color: var(--web-ui_button-color, rgb(var(--color-snow)));
    --__internal__color-active: var(--web-ui_button-color-active, var(--__internal__color));
    --__internal__color-disabled: var(--web-ui_button-color-disabled, rgb(var(--color-hare)));
    --__internal__filter-hover: var(--web-ui_button-filter-hover, brightness(1.1));
    --__internal__height: var(--web-ui_button-height, 50px);
    --__internal__lip-width: var(--web-ui_button-lip-width, 4px);
    --__internal__padding: var(--web-ui_button-padding, 0 16px);
    background: none;
    border-color: transparent;
    border-radius: var(--__internal__border-radius);
    border-style: solid;
    border-width: 0 0 var(--__internal__lip-width);
    color: var(--__internal__color);
    height: var(--__internal__height);
    padding: var(--__internal__padding);
    transition: filter .2s, transform var(--web-ui_button-transition-lip);
}
._coyoteBtn_36g4N {
    --__internal__font-size: var(--web-ui_button-font-size, 15px);
    --__internal__letter-spacing: var(--web-ui_button-letter-spacing, 0.8px);
    --__internal__line-height: var(--web-ui_button-line-height, 1.2);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    align-items: center;
    box-sizing: border-box;
    font: 700 var(--__internal__font-size) / var(--__internal__line-height) din-round, sans-serif;
    justify-content: center;
    letter-spacing: var(--__internal__letter-spacing);
    text-decoration: none;
    text-transform: uppercase;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    white-space: nowrap;
}
._coyoteBtn_2YF0P {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    outline: none;
    cursor: pointer;
    display: inline-flex;
    position: relative;
    touch-action: manipulation;
    transform: translateZ(0);
}
._coyoteBtn_1M9iF:active {
    color: var(--__internal__color-active);
    transform: translateY(var(--__internal__lip-width)) translateZ(0);
}
._coyoteBtn_1M9iF:hover {
    filter: var(--__internal__filter-hover);
}
._coyoteBtn_1M9iF:before {
    background-color: var(--__internal__background-color);
    border-radius: var(--__internal__border-radius);
    bottom: 0;
    box-shadow: 0 var(--__internal__lip-width) 0;
    color: var(--__internal__border-color);
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: box-shadow var(--web-ui_button-transition-lip);
    z-index: -1;
}
._coyoteBtn_3DZXI {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    border: none;
    box-sizing: border-box;
    caret-color: rgb(var(--color-macaw));
    color: var(--web-ui_input-color, rgb(var(--color-eel)));
    font: var(--text-body-weight) var(--text-body-size) / var(--text-body-line-height) din-round, sans-serif;
    font-size: var(--web-ui_input-font-size, var(--text-body-size));
    letter-spacing: var(--text-body-letter-spacing);
    line-height: var(--web-ui_input-line-height, var(--text-body-line-height));
    min-width: 0;
    outline: none;
    padding: var(--web-ui_input-padding, 8px 14px);
    text-transform: var(--text-body-casing);
    width: 100%;
}
._coyoteBtn_3nbuA:focus-within {
    border-color: rgb(var(--color-macaw));
}
._coyoteBtn_3nbuA {
    background: rgb(var(--color-polar));
    border: 2px solid rgb(var(--color-swan));
    border-radius: 12px;
    display: flex;
    overflow: hidden;
}
        `;
        // createWindow(strength + '|' + wave);
        document.head.appendChild(coyoteCSS);
        document.body.appendChild(lightingDiv);
        createSettingsWindow();

        document.getElementById('strengthInput').value = strength;
        document.getElementById('waveInput').value = wave;
        document.getElementById('timeInput').value = sendTime;
        document.getElementById('addStrengthInput').value = addStrength;
        document.getElementById('reduceStrengthInput').value = reduceStrength;

        document.getElementById('strengthInput').addEventListener('input', function () {
            strength = this.value;
            addOrReduce(3, 1, strength);
            document.getElementById('nowStrength').textContent = strength;
        });
        document.getElementById('waveInput').addEventListener('input',function () {
            wave = this.value;
            GM_setValue('coyoteWave', wave);
        });
        document.getElementById('timeInput').addEventListener('input',function () {
            sendTime = this.value;
            GM_setValue('coyoteTime', sendTime);
        });
        document.getElementById('addStrengthInput').addEventListener('input',function () {
            addStrength = this.value;
            GM_setValue('coyoteAddStrength', addStrength);
        });
        document.getElementById('reduceStrengthInput').addEventListener('input',function () {
            addStrength = this.value;
            GM_setValue('coyoteReduceStrength', reduceStrength);
        });
    }

    init();
    GM_registerMenuCommand('建立连接', createSocket);
    GM_registerMenuCommand('打开设置', openSettings);
})();
# Build stage
FROM golang:1.19.2-buster AS builder

WORKDIR /app
COPY . .

RUN go build -o golang main.go

# Run stage
FROM gcr.io/distroless/static-debian11

FROM scratch
WORKDIR /app

COPY --from=builder /app .
EXPOSE 8080

CMD ["/app/golang"]



















const request = require('request');
const { expect } = require('chai');

describe('basic API integration test', () => {
  const APIurl = 'http://localhost:7865';

  it('get correct status code', () => {
    request.get(`${APIurl}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('get correct result', () => {
    request.get(`${APIurl}/`, (_err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
    });     
  });

  it('get correct content type', () => {
    request.get(`${APIurl}/`, (_err, res, body) => {
      expect(res.headers['content-type']).to.be.equal('text/html; charset=utf-8');
    });     
  });

  it('get correct status code for valid id', () => {
    request.get(`${APIurl}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('get correct result with valid id', () => {
    request.get(`${APIurl}/cart/12`, (_err, res, body) => {
      expect(body).to.be.equal('Payment methods for cart 12');
    });
  });

  it('get correct status code with invalid id', () => {
    request.get(`${APIurl}/cart/a12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
    });
  });

  it('get correct result with invalid id', () => {
    request.get(`${APIurl}/cart/a12`, (_err, res, body) => {
      expect(body).to.be.equal('Cannot GET /cart/a12');
    });
  });

  it('get correct content type', () => {
    request.get(`${APIurl}/cart/12`, (_err, res, body) => {
      expect(res.headers['content-type']).to.be.equal('text/html; charset=utf-8');
    });
  });

  it('get correct content type', () => {
    request.get(`${APIurl}/cart/a12`, (_err, res, body) => {
      expect(res.headers['content-type']).to.be.equal('text/html; charset=utf-8');
    });
  });

  it('post correct status code for valid login', () => {
    request.post(`${APIurl}/login`, {json: {userName: 'Taiwo'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('post correct response with valid login', () => {
    request.post(`${APIurl}/login`, {json: {userName: 'Taiwo'}}, (_err, res, body) => {
      expect(body).to.be.equal('Welcome Taiwo');
    });
  });

  it('post correct content type', () => {
    request.post(`${APIurl}/login`, {json: {userName: 'Taiwo'}}, (_err, res, body) => {
      expect(res.headers['content-type']).to.be.equal('text/html; charset=utf-8');
    });
  });

  it('get correct status code for valid available payments', () => {
    request.get(`${APIurl}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('get correct response for valid available payments', () => {
    request.get(`${APIurl}/available_payments`, (_err, res, body) => {
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
    });
  });

  it('get correct content type', () => {
    request.get(`${APIurl}/available_payments`, (_err, res, body) => {
      expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
    });
  });
});

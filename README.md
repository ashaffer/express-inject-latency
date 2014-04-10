express-inject-latency
======================

Inject a normally distributed amount of latency into your express pipeline.  Useful for testing UI behavior in quasi-realistic conditions.

## Example

```javascript
app.use(injectLatency({
  mean: 200,
  variance: 20
}));
```

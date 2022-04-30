
                Crafty.init(200, 200);

                var dim1 = {x: 5, y: 5}
                var dim2 = {x: 20, y: 20}
                
                Crafty.c("Circle", {
                   circle: function(radius, color) {
                        this.radius = radius;
                        this.w = this.h = radius * 2;
                        this.color = color || "#000000";
                
                        this.bind("Move", Crafty.DrawManager.drawAll)
                        return this;
                   },
                
                   draw: function() {
                       var ctx = Crafty.canvas.context;
                       ctx.save();
                       ctx.fillStyle = this.color;
                       ctx.beginPath();
                       ctx.arc(
                           this.x + this.radius,
                           this.y + this.radius,
                           this.radius,
                           0,
                           Math.PI * 2
                       );
                       ctx.closePath();
                       ctx.fill();
                       ctx.restore();
                    }
                });
                
                var circle1 = Crafty.e("2D, Canvas, Circle").attr(dim1).circle(15, "red");
                
                var circle2 = Crafty.e("2D, Canvas, Circle, Fourway").fourway(2).attr(dim2).circle(20, "blue");
                
                circle2.bind("EnterFrame", function () {
                    var dx = (circle1.x + circle1.radius) - (circle2.x + circle2.radius);
                    var dy = (circle1.y + circle1.radius) - (circle2.y + circle2.radius);
                    var distance = Math.sqrt(dx * dx + dy * dy);
                
                    if (distance < circle1.radius + circle2.radius) {
                        // collision detected!
                        this.color = "green";
                    } else {
                        // no collision
                        this.color = "blue";
                    }
                });
                
                
                
                            